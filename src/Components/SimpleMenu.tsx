import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHFINDER_PROJECT_PATH, SORTING_ALG_PROJECT_PATH, TREE_PROJECT_PATH } from '../constants';

const useStyles = makeStyles({
    popOverRoot: {
        pointerEvents: 'none',
    },
    menuItem: {
        '&:hover': {
            color: 'green',
        },
    },
});

export function SimpleMenu() {
    let currentlyHovering = false;
    const styles = useStyles();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    function handleClick(event: MouseEvent<HTMLElement>) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }

    function handleNavigate(path: string) {
        setAnchorEl(null);
        navigate(path);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }

    return (
        <div>
            <Button
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}
            >
                <Typography variant="h6" color="black" fontSize={30}>
                    Projects
                </Typography>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                    style: { pointerEvents: 'auto' },
                }}
                getContentAnchorEl={null}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                PopoverClasses={{
                    root: styles.popOverRoot,
                }}
            >
                <MenuItem
                    onClick={() => handleNavigate(PATHFINDER_PROJECT_PATH)}
                    className={styles.menuItem}
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography>Pathfinder</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleNavigate(TREE_PROJECT_PATH)}
                    className={styles.menuItem}
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography>Binary Tree Traverser</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleNavigate(SORTING_ALG_PROJECT_PATH)}
                    className={styles.menuItem}
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography>Sorting Algorithm Visualizer</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}
