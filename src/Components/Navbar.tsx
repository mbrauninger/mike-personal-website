import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import '@fontsource/lato';
import '@fontsource/montserrat';
import '@fontsource/nunito';
import '@fontsource/open-sans';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

    return (
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.iconButton}
                onClick={() => navigate('/Home')}
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
            <Hidden mdDown>
                <Button
                    sx={{
                        marginLeft: 'auto',
                        position: 'relative',
                        right: 100,
                    }}
                    onClick={() => navigate('/Home')}
                >
                    <Typography variant="h6" color="black" fontSize={30}>
                        Home
                    </Typography>
                </Button>
                <Button
                    sx={{
                        position: 'relative',
                        right: 100,
                        marginLeft: 3,
                    }}
                    onClick={() => navigate('/Photos')}
                >
                    <Typography variant="h6" color="black" fontSize={30}>
                        Photos
                    </Typography>
                </Button>
                <Button
                    sx={{
                        position: 'relative',
                        right: 100,
                        marginLeft: 3,
                    }}
                    onClick={() => navigate('/Blog')}
                >
                    <Typography variant="h6" color="black" fontSize={30}>
                        Blog
                    </Typography>
                </Button>
            </Hidden>
        </Toolbar>
    );
}
