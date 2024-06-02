import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SimpleMenu } from './SimpleMenu';

import '@fontsource/lato';
import '@fontsource/montserrat';
import '@fontsource/nunito';
import '@fontsource/open-sans';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BLOG_PATH, HOME_PATH } from '../constants';
import { TemporaryDrawer } from './TemporaryDrawer';

const useStyles = makeStyles((theme) => ({
    iconButton: {
        [theme.breakpoints.up('lg')]: {
            position: 'relative',
            left: 100,
        },
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            display: 'block',
        },
    },
}));

export function Navbar() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = useState(true);

    const toggleDrawer = (newOpen: boolean) => () => {
        setDrawerOpen(newOpen);
    };

    return (
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.iconButton}
                onClick={() => navigate(HOME_PATH)}
            >
                <Box
                    component="img"
                    sx={{
                        height: 115,
                        width: 115,
                        padding: 2,
                    }}
                    alt="Logo"
                    src="/Logo.png"
                />
            </IconButton>
            <Hidden mdUp>
                <Button sx={{ color: 'black', position: 'absolute', right: 20 }} onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </Button>
                <TemporaryDrawer open={drawerOpen} setOpen={setDrawerOpen} />
            </Hidden>
            <Hidden mdDown>
                <Button
                    sx={{
                        marginLeft: 'auto',
                        position: 'relative',
                        right: 100,
                    }}
                    onClick={() => navigate(HOME_PATH)}
                >
                    <Typography variant="h6" color="black" fontSize={30}>
                        Home
                    </Typography>
                </Button>
                <Box
                    sx={{
                        position: 'relative',
                        right: 100,
                        marginLeft: 3,
                    }}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => e.preventDefault()}
                >
                    <SimpleMenu />
                </Box>
                <Button
                    sx={{
                        position: 'relative',
                        right: 100,
                        marginLeft: 3,
                    }}
                    onClick={() => navigate(BLOG_PATH)}
                >
                    <Typography variant="h6" color="black" fontSize={30}>
                        Blog
                    </Typography>
                </Button>
            </Hidden>
        </Toolbar>
    );
}
