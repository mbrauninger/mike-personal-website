import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: 125,
        backgroundColor: '#3b3b3b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 80,
        marginTop: 'auto',
        [theme.breakpoints.down('md')]: {
            gap: 40,
        },
        position: 'relative',
    },
    linkedin: {
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        height: 50,
        width: 50,
        position: 'relative',
        bottom: 15,
    },
    youtube: {
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        height: 67,
        width: 67,
        position: 'relative',
        bottom: 15,
    },
    github: {
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        height: 60,
        width: 60,
        position: 'relative',
        bottom: 15,
    },
    copyright: {
        color: 'white',
        position: 'absolute',
        top: 85,
    },
}));

export function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Typography className={classes.copyright}>© 2024 Mike Brauninger. All rights reserved.</Typography>
            <Box component="img" className={classes.linkedin} alt="Logo" src="linkedin-app-white-icon.png" />
            <Box component="img" className={classes.youtube} alt="Logo" src="youtube-icon-white.png" />
            <Box component="img" className={classes.github} alt="Logo" src="github-icon.png" />
        </Box>
    );
}
