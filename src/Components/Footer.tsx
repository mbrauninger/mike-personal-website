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
        gap: 100,
        marginTop: 'auto',
        [theme.breakpoints.down('md')]: {
            gap: 40,
        },
        position: 'relative',
    },
    linkedin: {
        height: 75,
        width: 75,
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            height: 50,
            width: 50,
            position: 'relative',
            bottom: 15,
        },
    },
    youtube: {
        height: 100,
        width: 100,
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            height: 67,
            width: 67,
            position: 'relative',
            bottom: 15,
        },
    },
    github: {
        height: 81,
        width: 81,
        '&:hover': {
            filter: 'grayscale(100%) opacity(70%)',
        },
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            height: 60,
            width: 60,
            position: 'relative',
            bottom: 15,
        },
    },
    copyright: {
        [theme.breakpoints.up('md')]: {
            right: 200,
        },
        color: 'white',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            top: 85,
        },
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
