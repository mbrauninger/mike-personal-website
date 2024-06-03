import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { TraversalSpeeds, TraversalTypes } from './Types';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 190,
    backgroundColor: '#ebfce3',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: Function;
    nodes: string[];
    startingNode: string;
    setStartingNode: Function;
    endNode: string;
    setEndNode: Function;
    selectedTraversal: string;
    setSelectedTraversal: Function;
    sortingSpeedLabel: string;
    setSortingSpeedLabel: Function;
    traverseAll: boolean;
    setTraverseAll: Function;
}

/**
 * The modal that is displayed when the user clicks the 'Settings' button.
 * @param props - The state variables/functions that are passed into the component.
 * @returns The component.
 */
export const SettingsModal = (props: ModalProps) => {
    return (
        <Modal open={props.modalOpen} onClose={() => props.setModalOpen(false)} aria-labelledby="settings-modal">
            <Box sx={modalStyle}>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => props.setModalOpen(false)}
                    aria-label="close"
                    style={{ position: 'absolute', top: 0, right: 10 }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ position: 'relative', bottom: 15 }}>
                    <Box>
                        <label>
                            <Typography sx={{ display: 'inline' }}>Traversal Type:</Typography>
                            <Select
                                style={{
                                    marginRight: 5,
                                    height: 30,
                                    width: 100,
                                    fontSize: 10,
                                    backgroundColor: 'white',
                                    position: 'relative',
                                    left: 7,
                                    marginBottom: 13,
                                }}
                                value={props.selectedTraversal}
                                label="TraversalType"
                                onChange={(event) => {
                                    props.setSelectedTraversal(event.target.value);
                                }}
                                MenuProps={{
                                    style: {
                                        height: 400, // Set the maximum height of the menu
                                    },
                                }}
                            >
                                <MenuItem sx={{ fontSize: 10 }} value={TraversalTypes.DIJKSTRA}>
                                    Dijkstra
                                </MenuItem>
                                <MenuItem sx={{ fontSize: 10 }} value={TraversalTypes.A_STAR}>
                                    A*
                                </MenuItem>
                                <MenuItem sx={{ fontSize: 10 }} value={TraversalTypes.BFS}>
                                    BFS
                                </MenuItem>
                                <MenuItem sx={{ fontSize: 10 }} value={TraversalTypes.DFS}>
                                    DFS
                                </MenuItem>
                            </Select>
                        </label>
                        <Box>
                            <label>
                                <Typography sx={{ display: 'inline' }}>Starting Node:</Typography>
                                <Select
                                    style={{
                                        marginRight: 5,
                                        height: 30,
                                        width: 100,
                                        fontSize: 10,
                                        backgroundColor: 'white',
                                        position: 'relative',
                                        left: 7,
                                        marginBottom: 13,
                                    }}
                                    value={props.startingNode}
                                    label="StartingNode"
                                    onChange={(event) => {
                                        props.setStartingNode(event.target.value);
                                    }}
                                    MenuProps={{
                                        style: {
                                            height: 400, // Set the maximum height of the menu
                                        },
                                    }}
                                >
                                    {props.nodes.map((node) => (
                                        <MenuItem sx={{ fontSize: 10 }} value={node}>
                                            {node}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </label>
                        </Box>
                        <Box>
                            <label>
                                <Typography sx={{ display: 'inline' }}>End Node:</Typography>
                                <Select
                                    disabled={props.traverseAll}
                                    style={{
                                        marginRight: 5,
                                        height: 30,
                                        width: 100,
                                        fontSize: 10,
                                        backgroundColor: 'white',
                                        position: 'relative',
                                        left: 7,
                                        marginBottom: 13,
                                    }}
                                    value={props.endNode}
                                    label="EndNode"
                                    onChange={(event) => {
                                        props.setEndNode(event.target.value);
                                    }}
                                    MenuProps={{
                                        style: {
                                            height: 400, // Set the maximum height of the menu
                                        },
                                    }}
                                >
                                    {props.nodes.map((node) => (
                                        <MenuItem sx={{ fontSize: 10 }} value={node}>
                                            {props.traverseAll ? '' : node}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </label>
                        </Box>
                        <Box>
                            <label>
                                <Typography sx={{ display: 'inline' }}>Sorting Speed:</Typography>
                                <Select
                                    style={{
                                        marginRight: 5,
                                        height: 30,
                                        width: 100,
                                        fontSize: 10,
                                        backgroundColor: 'white',
                                        position: 'relative',
                                        left: 7,
                                        marginBottom: 7,
                                    }}
                                    value={props.sortingSpeedLabel}
                                    label="Age"
                                    onChange={(event) => {
                                        props.setSortingSpeedLabel(event.target.value);
                                    }}
                                    MenuProps={{
                                        style: {
                                            height: 400,
                                        },
                                    }}
                                >
                                    <MenuItem sx={{ fontSize: 10 }} value={TraversalSpeeds.FAST}>
                                        Fast
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: 10 }} value={TraversalSpeeds.MEDIUM}>
                                        Medium
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: 10 }} value={TraversalSpeeds.SLOW}>
                                        Slow
                                    </MenuItem>
                                </Select>
                            </label>
                        </Box>
                        <Box sx={{ paddingBottom: 5 }}>
                            <label>
                                <Typography sx={{ display: 'inline' }}>Traverse Entire Graph:</Typography>
                                <Switch
                                    checked={props.traverseAll}
                                    value={props.traverseAll}
                                    onChange={() => props.setTraverseAll(!props.traverseAll)}
                                />
                            </label>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
