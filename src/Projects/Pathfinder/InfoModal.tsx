import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  width: window.innerWidth <= 768 ? "70%" : 600,
  height: window.innerWidth <= 768 ? "50%" : 390,
  transform: "translate(0%, 30%)",
  bgcolor: '#ebfce3',
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  margin: "auto",
};

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: Function;
}

export function InfoModal(props: ModalProps) {
  return (
    <Modal
      open={props.modalOpen}
      onClose={() => props.setModalOpen(false)}
      aria-labelledby="info-modal"
    >
      <Box sx={modalStyle}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => props.setModalOpen(false)}
          aria-label="close"
          style={{ position: "absolute", top: 5, right: 15 }}
        >
          <CloseIcon />
        </IconButton>
        <Box>
          <Typography variant="h4" fontWeight="bold">Overview</Typography>
          <Typography>
          
          This is a project that visualizes graph traversal algorithms. It
          features four algorithms:
          <ul>
            <li>Dijkstra</li>
            <li>A* Search</li>
            <li>Breadth-First Search</li>
            <li>Depth-First Search</li>
          </ul>
          The graph is comprised of nodes (the bigger white circles), with a cost
          to get from one node to another through an edge (lines with a smaller circle in the middle). Nodes additionally
          contain heuristic values (the number inside each node), which are used only
          for A* Search. The heuristics in this project are admissible but not consistent (for those
          of you who are familiar with A* Search terminology).
          <br />
          <br />
          <Typography variant="h4" fontWeight="bold">Project Settings</Typography>
          You can set the traversal algorithm in the settings window, which
          appears by clicking the 'Settings' button at the bottom of the screen.
          You can play through a traversal in real time, as well as pause the
          traversal by clicking the 'Play' button. Additionally, you can edit the traversal
          speed in the settings window. If you would prefer to click through the traversal
          on your own time, you can do so by clicking the 'Step' button at the bottom of the screen.
          <br />
          <br />
          You can edit the starting node and the ending node in the settings
          window, and can optionally configure the application to traverse the
          entire graph instead of stopping at a goal node.
          <br />
          <br />
          Clicking the 'New Graph' button in the top-right corner of the graph
          visualizer will generate a new graph with randomized weights and
          heuristics, and will take your updated settings into account.
          <br />
          <br />
          <Typography variant="h4" fontWeight="bold">Tables</Typography>
          If you are on a computer, you will see two radio buttons at the bottom of the screen:
          <ul>
            <li>Path Table</li>
            <li>Steps Table</li>
          </ul>
          The path table contains path-related information about each node, such as
          the calculated lowest cost to get to that node, as well as the previous node
          that the traversal arrived to that node from. If A* Search is the
          selected algorithm, the table will also show the A* score. Once the
          traversal is finished, you can click on a node to view the calculated
          path to that node from the starting node. The steps table will list each step in the traversal, up to 30 steps
          at a time.
          <br />
          <br />
          Hope you enjoy the project!
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
