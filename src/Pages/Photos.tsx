import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    margin: 20,
  },
  image: {
    width: 1015,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Background color of the overlay
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  text: {
    color: 'white', // Text color
  },
  overlayActive: {
    opacity: 1,
  },
}));

interface PhotoProps {
  path: string;
  text: string;
  alt: string;
}

function Photo(props: PhotoProps) {
  const classes = useStyles();

  const [isHovered, setHovered] = React.useState(false);

  return (
    <Box className={classes.container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={props.path} alt={props.alt} className={classes.image} />
      <Box className={`${classes.overlay} ${isHovered && classes.overlayActive}`}>
        <Typography variant="h5" className={classes.text} fontFamily={'Optima, sans-serif'} textAlign={'center'}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
}

export function Photos() {
  return (
    <Box display={'grid'} justifyContent={'center'}>
      <Typography
        variant="h3"
        fontFamily={'Optima, sans-serif'}
        display={'flex'}
        justifyContent={'center'}
        paddingBottom={2}
      >
        Photos
      </Typography>
      <Photo
        path="Chicago1.png"
        alt="Chicago"
        text="A scene from the Chicago River right as my architecture tour boat was about to depart."
      />
      <Photo path="Chicago2.png" alt="Chicago" text="A gorgeous photo of the city of Chicago from the water." />
      <Photo path="SeattleSkyline.png" alt="Seattle Skyline" text="Underneath the Space Needle!" />
      <Photo path="GreatWheel.png" alt="Seattle Great Wheel" text="Underneath the Space Needle!" />
      <Photo path="Sunflower.png" alt="Seattle Great Wheel" text="Underneath the Space Needle!" />
      <Photo
        path="RattlesnakeLedge.png"
        alt="Chicago"
        text="A photo from the hike of Rattlesnake Ledge, a trail about 45 minutes east of Seattle."
      />
      <Photo path="ColoradoMountains.png" alt="Colorado Mountains" text="Underneath the Space Needle!" />
      <Photo path="MeInDenver.png" alt="Exploring Colorado" text="Underneath the Space Needle!" />
      <Photo path="BeautifulRock.png" alt="Red Rock" text="Underneath the Space Needle!" />
      <Photo path="GreatWheel.png" alt="Seattle Great Wheel" text="Underneath the Space Needle!" />
    </Box>
  );
}
