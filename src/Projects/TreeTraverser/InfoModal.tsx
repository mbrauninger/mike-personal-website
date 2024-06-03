import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const modalStyle = {
    width: window.innerWidth <= 768 ? '70%' : 600,
    height: window.innerWidth <= 768 ? '50%' : 390,
    transform: 'translate(0%, 30%)',
    bgcolor: '#ebfce3',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    margin: 'auto',
};

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: Function;
}

export function InfoModal(props: ModalProps) {
    return (
        <Modal open={props.modalOpen} onClose={() => props.setModalOpen(false)} aria-labelledby="info-modal">
            <Box sx={modalStyle}>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => props.setModalOpen(false)}
                    aria-label="close"
                    style={{ position: 'absolute', top: 5, right: 15 }}
                >
                    <CloseIcon />
                </IconButton>
                <Box>
                    <Typography variant="h4" fontWeight="bold">
                        Overview
                    </Typography>
                    <Typography>
                        This is a project that visualizes binary tree traversals. It features four traversal algorithms:
                        <ul>
                            <li>InOrder Traversal</li>
                            <li>PreOrder Traversal</li>
                            <li>PostOrder Traversal</li>
                            <li>Breadth-First Search</li>
                        </ul>
                        <Typography variant="h4" fontWeight="bold">
                            Project Settings
                        </Typography>
                        You can set the traversal algorithm in the settings window, which appears by clicking the
                        'Settings' button at the bottom of the screen. You can play through a traversal in real time, as
                        well as pause the traversal by clicking the 'Play' button. Additionally, you can edit the
                        traversal speed in the settings window. If you would prefer to click through the traversal on
                        your own time, you can do so by clicking the 'Step' button at the bottom of the screen.
                        <br />
                        <br />
                        Clicking the 'New Tree' button in the top-right corner of the visualizer will generate a new
                        tree with a random structure, and will take your updated settings into account.
                        <br />
                        <br />
                        <Typography variant="h4" fontWeight="bold">
                            Table
                        </Typography>
                        If you are on a computer, you will see a table on the right-hand side of the screen. The table
                        will list each step in the traversal, up to 30 steps at a time. You can reference it to get a
                        better understanding of what's happening as the traversal is unfolding.
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
}
