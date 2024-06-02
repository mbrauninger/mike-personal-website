import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHFINDER_PROJECT_PATH, SORTING_ALG_PROJECT_PATH, TREE_PROJECT_PATH } from '../constants';

interface DrawerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PAGES = ['Home', 'Blog'];
const PAGE_ROUTES = ['/', '/blog'];
const PAGE_ICONS = [<HomeIcon sx={{ color: 'black' }} />, <ArticleIcon sx={{ color: 'black' }} />];
const PROJECTS = ['Pathfinder', 'Binary Tree Traverser', 'Sorting Algorithm Visualizer'];
const PROJECT_IMAGES_PATHS = ['graph.png', 'binary-tree.png', 'parenthesis.png'];
const PROJECT_ROUTES = [PATHFINDER_PROJECT_PATH, TREE_PROJECT_PATH, SORTING_ALG_PROJECT_PATH];

export function TemporaryDrawer(props: DrawerProps) {
    const navigate = useNavigate();

    const toggleDrawer = (newOpen: boolean) => () => {
        props.setOpen(newOpen);
    };

    function handleNavigate(path: string) {
        props.setOpen(false);
        navigate(path);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {PAGES.map((text, index) => (
                    <ListItem key={text} disablePadding onClick={() => handleNavigate(PAGE_ROUTES[index])}>
                        <ListItemButton>
                            <ListItemIcon>{PAGE_ICONS[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {PROJECTS.map((text, index) => (
                    <ListItem key={text} disablePadding onClick={() => handleNavigate(PROJECT_ROUTES[index])}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        position: 'relative',
                                    }}
                                    alt="Logo"
                                    src={PROJECT_IMAGES_PATHS[index]}
                                />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer open={props.open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </div>
    );
}
