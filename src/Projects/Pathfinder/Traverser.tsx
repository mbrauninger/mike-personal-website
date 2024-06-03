import { useEffect, useRef, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import ScrollableTable from "./ScrollableTable";
import { SettingsModal } from "./SettingsModal";
import { Step, TraversalSpeeds, TraversalTypes, Graph } from "./Types";
import { generateGraph, updateGraphByValue, drawPath } from "./GraphFunctions";
import { aStar, bfs, dfs, dijkstra } from "./Traversals";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  CANVAS_WIDTH_PERCENTAGE,
  CANVAS_HEIGHT_PERCENTAGE,
  SLOW_DELAY,
  MEDIUM_DELAY,
  FAST_DELAY,
  MAX_LISTED_TRAVERSAL_ITEMS,
  GRAPH_SIZE,
} from "./Constants";
import { BottomButton } from "./BottomButton";
import {
  drawCanvas,
  handleNodeClick,
  isPointInsideNode,
} from "./CanvasFunctions";
import PathTable from "./PathTable";
import { InfoModal } from "./InfoModal";
import { Typography } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import '@fontsource/montserrat'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export function Traverser() {
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [traversalStep, setTraversalStep] = useState(0);
  const [sortingSpeedLabel, setSortingSpeedLabel] = useState(
    TraversalSpeeds.FAST,
  );
  const [sortingSpeed, setSortingSpeed] = useState(50);
  const [updateTraversalFlag, setUpdateTraversalFlag] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [traverseAll, setTraverseAll] = useState(false);
  const [startingNode, setStartingNode] = useState("A");
  const [endNode, setEndNode] = useState("l");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [listedTraversal, setListedTraversal] = useState<Step[]>([]);
  const [graph, setGraph] = useState<Graph>(
    generateGraph(GRAPH_SIZE, startingNode, endNode),
  );
  const [savedGraph, setSavedGraph] = useState<Graph>(graph);
  const [savedFinishedGraph, setSavedFinishedGraph] = useState<Graph>(graph);
  const completeTraversalOutput = dijkstra(
    graph,
    startingNode,
    traverseAll ? "" : endNode,
  );
  const [traversal, setTraversal] = useState<Step[]>([]);
  const [distances, setDistances] = useState<Record<string, number>[]>(
    completeTraversalOutput.distances,
  );
  const [paths, setPaths] = useState<Record<string, string[]>>(
    completeTraversalOutput.paths,
  );
  const [from, setFrom] = useState<Record<string, string>[]>(
    completeTraversalOutput.from,
  );
  const [aStarValues, setAStarValues] = useState<Record<string, number>[]>([]);
  const [selectedTraversal, setSelectedTraversal] = useState(
    TraversalTypes.DIJKSTRA,
  );
  const [table, setTable] = useState('path');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTable(event.target.value);
  };

  /**
   * Detects canvas clicks and mouse moves. If the click is inside a node and the traversal is
   * finished, draw a path. If the mouse is inside a node, make the mouse a pointer.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    function handleCanvasClick(event: MouseEvent) {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        handleNodeClick(
          x,
          y,
          graph,
          finished,
          distances[distances.length - 1],
          paths,
          savedFinishedGraph,
          setGraph,
        );
      }
    }
    function handleMouseMove(event: MouseEvent) {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        canvas.style.cursor = isPointInsideNode(x, y, graph)
          ? "pointer"
          : "default";
      }
    }
    canvas?.addEventListener("click", handleCanvasClick);
    canvas?.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas?.removeEventListener("click", handleCanvasClick);
      canvas?.addEventListener("mousemove", handleMouseMove);
    };
  }, [finished]);

  /**
   * Performs one step in the traversal algorithm and updates the listed traversal.
   * If state is finished, do nothing. If the traversal is on the last step, update
   * state accordingly.
   */
  const performStep = async () => {
    if (finished) return;

    if (traversalStep === traversal.length) {
      setSavedFinishedGraph({ ...graph });
      setTraversalStep(0);
      setPlaying(false);
      setFinished(true);
      return;
    }
    if (listedTraversal.length < MAX_LISTED_TRAVERSAL_ITEMS) {
      setListedTraversal((prevListed) => [
        ...prevListed,
        traversal[traversalStep],
      ]);
    } else {
      setListedTraversal((prevListed) => [
        ...prevListed.slice(1),
        traversal[traversalStep],
      ]);
    }

    setGraph((prevGraph) => {
      const currentGraph = JSON.parse(JSON.stringify(prevGraph));
      updateGraphByValue(
        currentGraph,
        traversal[traversalStep].value,
        traversal[traversalStep].state,
      );
      return currentGraph;
    });
    setTraversalStep((prevStep) => {
      return prevStep + 1;
    });
  };

  /**
   * Pauses/unpauses the display sequence. If finished, do nothing.
   * Update state specifically if traversal is at step 0.
   */
  const handleStart = () => {
    if (finished) return;
    if (traversalStep === 0) {
      setPlaying(true);
      setFinished(false);
    } else {
      setPlaying(!playing);
    }
  };

  /**
   * Resets state to a point where a new traversal can be started.
   * Takes the current graph and sets all nodes to 'clean' state with
   * the savedGraph variable.
   */
  const handleReset = () => {
    setListedTraversal([]);
    setTraversalStep(0);
    setGraph(savedGraph);
    setPlaying(false);
    setFinished(false);
  };

  /**
   * Sets traversal variable and resets state.
   * @param traversalFunc - The function that traverses the graph and builds the array to display output.
   */
  const handleTraversalChange = (traversalFunc: Function) => {
    handleReset();
    const output = traversalFunc(
      graph,
      startingNode,
      traverseAll ? "" : endNode,
    );
    setTraversal(output.traversal);
    setDistances(output.distances);
    setPaths(output.paths);
    setFrom(output.from);
    if (traversalFunc === aStar) {
      setAStarValues(output.aStar);
    } else {
      setAStarValues([]);
    }
  };

  useEffect(() => {
    drawCanvas(canvasRef, graph);
  }, [graph]);

  /**
   * Resets and sets a new graph. Sets this graph as the saved graph to
   * be used when resetting.
   */
  function newGraph() {
    handleReset();
    let graph = generateGraph(GRAPH_SIZE, startingNode, endNode);
    setGraph(graph);
    setSavedGraph(graph);
  }

  /**
   * Gets a new traversal ready to be visualized.
   */
  useEffect(() => {
    if (selectedTraversal === TraversalTypes.BFS) {
      handleTraversalChange(bfs);
    } else if (selectedTraversal === TraversalTypes.DIJKSTRA) {
      handleTraversalChange(dijkstra);
    } else if (selectedTraversal === TraversalTypes.DFS) {
      handleTraversalChange(dfs);
    } else if (selectedTraversal === TraversalTypes.A_STAR) {
      handleTraversalChange(aStar);
    }
  }, [
    selectedTraversal,
    updateTraversalFlag,
    startingNode,
    endNode,
    traverseAll,
  ]);

  /**
   * Updates sorting speed according to selected sorting speed.
   */
  useEffect(() => {
    if (sortingSpeedLabel === TraversalSpeeds.FAST) {
      setSortingSpeed(FAST_DELAY);
    } else if (sortingSpeedLabel === TraversalSpeeds.MEDIUM) {
      setSortingSpeed(MEDIUM_DELAY);
    } else if (sortingSpeedLabel === TraversalSpeeds.SLOW) {
      setSortingSpeed(SLOW_DELAY);
    }
  }, [sortingSpeedLabel]);

  /**
   * Performs one step to avoid the appearance of delay
   */
  useEffect(() => {
    if (playing) performStep();
  }, [playing]);

  function getDistancesStep() {
    let output = traversalStep === 0 ? 0 : traversalStep - 1;
    if (finished) {
      output = distances.length - 1;
    }
    return output;
  }

  /**
   * If playing, performs steps in the traversal at the interval specified
   * by the sorting speed delay.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (playing) performStep();
    }, sortingSpeed);

    return () => clearInterval(intervalId);
  }, [playing, traversalStep]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant={window.innerWidth <= 768 ? "h3" : "h2"} sx={{paddingBottom: 2, position: 'relative', bottom: 7}}>Pathfinder</Typography>
        <Button onClick={() => setInfoModalOpen(true)} sx={{position: 'relative', bottom: 14, left: 20, border: '1px solid black', borderRadius: 100, backgroundColor: 'white'}}>
          <QuestionMarkIcon sx={{width: 50, height: 50, color: 'black'}} />
        </Button>
      </div>
      <SettingsModal
        modalOpen={settingsModalOpen}
        setModalOpen={setSettingsModalOpen}
        nodes={Object.keys(graph)}
        startingNode={startingNode}
        setStartingNode={setStartingNode}
        endNode={endNode}
        setEndNode={setEndNode}
        selectedTraversal={selectedTraversal}
        setSelectedTraversal={setSelectedTraversal}
        sortingSpeedLabel={sortingSpeedLabel}
        setSortingSpeedLabel={setSortingSpeedLabel}
        traverseAll={traverseAll}
        setTraverseAll={setTraverseAll}
      />
      <InfoModal modalOpen={infoModalOpen} setModalOpen={setInfoModalOpen} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bottom: 15,
        }}
      >
        {/* {window.innerWidth > 768 && (
          <div
            style={{
              width: `${20}%`,
              paddingRight: `${1}%`,
            }}
          >
            <PathTable
              data={distances[getDistancesStep()]}
              graph={graph}
              setGraph={setGraph}
              paths={paths}
              drawPath={drawPath}
              finished={finished}
              from={from[getDistancesStep()]}
              savedFinishedGraph={savedFinishedGraph}
              aStar={aStarValues[getDistancesStep()]}
            />
          </div>
        )} */}
        <div
          style={{
            width: `${CANVAS_WIDTH_PERCENTAGE}%`,
            height: `${CANVAS_HEIGHT_PERCENTAGE}vh`,
            marginTop: "5px",
            position: "relative",
            left: 5,
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              width: `${100}%`,
              height: `${100}%`,
              backgroundColor: "lightblue",
            }}
          />
          <Button
            style={{
              marginRight: 5,
              height: 25,
              fontSize: 16,
              position: "absolute",
              top: 10,
              right: 5,
            }}
            variant="contained"
            onClick={() => {
              newGraph();
              setUpdateTraversalFlag(!updateTraversalFlag);
            }}
          >
            New Graph
          </Button>
        </div>
        {window.innerWidth > 768 && (
          table === 'path' ?
          <div
            style={{
              width: `${20}%`,
            }}
          >
            <ScrollableTable data={listedTraversal} />
          </div> : <div
            style={{
              width: `${20}%`,
              paddingRight: `${1}%`,
            }}
          >
            <PathTable
              data={distances[getDistancesStep()]}
              graph={graph}
              setGraph={setGraph}
              paths={paths}
              drawPath={drawPath}
              finished={finished}
              from={from[getDistancesStep()]}
              savedFinishedGraph={savedFinishedGraph}
              aStar={aStarValues[getDistancesStep()]}
            />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          left: 5,
        }}
      >
        <div
          style={{
            alignItems: "start",
          }}
        >
          <BottomButton text="Play" func={handleStart} />
          <BottomButton text="Step" func={performStep} />
          <BottomButton text="Reset" func={handleReset} />
          <BottomButton
            text="Settings"
            func={setSettingsModalOpen}
            funcArg={true}
          />
          <FormControl component="fieldset">
      <RadioGroup aria-label="table" name="table1" value={table} row onChange={handleChange} style={{position: 'relative', left: 10, bottom: 7}}>
        <FormControlLabel value="path" control={<Radio color="primary" />} label="" />
        <Typography sx={{position: 'relative', right: 15, top: 9}}>Path Table</Typography>
        <FormControlLabel value="steps" control={<Radio color="primary" />} label="" />
        <Typography sx={{position: 'relative', right: 15, top: 9}}>Steps Table</Typography>
      </RadioGroup>
    </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Traverser;
