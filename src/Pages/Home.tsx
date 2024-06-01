import { makeStyles } from '@material-ui/core/styles';
import { Box, Hidden } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material';
import ListItem from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  textContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      width: '90%',
      flexDirection: 'column',
    },
  },
  table: {
    fontFamily: 'Optima, sans-serif',
    maxWidth: 1250,
    margin: 'auto',
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <Box>

    <Box className={classes.container}>
      <Box maxWidth={800} className={classes.textContainer}>
        <Typography
          variant="h2"
          fontWeight={'bold'}
          fontFamily={'Optima, sans-serif'}
          display={'flex'}
          justifyContent={'center'}
          paddingBottom={2}
        >
          Hello There!
        </Typography>
        <Hidden mdUp>
          <Box
            component="img"
            sx={{
              borderRadius: 50,
              height: 300,
              width: 300,
              marginBottom: 3,
            }}
            alt="Logo"
            src="ProfilePic.png"
          />
        </Hidden>
        <Typography variant="h6" color="black" fontSize={25} fontFamily={'Optima, sans-serif'}>
          I'm Mike, a software engineer based in Seattle. I'm originally from Massachusetts, but I've been living in
          Seattle for about a year now. Feel free to browse around this website to learn more about me!
        </Typography>
      </Box>
      <Hidden mdDown>
        <Box
          component="img"
          sx={{
            borderRadius: 100,
            height: 300,
            width: 300,
            position: 'relative',
            top: 25,
            left: 50,
          }}
          alt="Logo"
          src="ProfilePic.png"
        />
      </Hidden>
    </Box>
    <Box>

    <Typography
          variant="h2"
          fontWeight={'bold'}
          fontFamily={'Optima, sans-serif'}
          display={'flex'}
          justifyContent={'center'}
          paddingBottom={2}
        >
          Experience
        </Typography>
        <Table className={classes.table}>
        <TableBody>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, sans-serif', position: 'relative' }}
                  >
                    Software Engineer at Amazon
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, sans-serif', position: 'relative' }}
                    style={{ paddingLeft: 20 }}
                  >
                    <ul>
  <li>Created a secure workstation used by ML Engineers inside Amazon</li>
  <li></li>
  <li>Milk</li>
</ul>
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, sans-serif', position: 'relative' }}
                  >
                    Software Engineer Intern at Amazon
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, sans-serif', position: 'relative' }}
                    style={{ paddingLeft: 20 }}
                  >
                    <ul>
  <li>Created a secure workstation used by ML Engineers inside Amazon</li>
  <li></li>
  <li>Milk</li>
</ul>
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Box>
    </Box>
  );
}
