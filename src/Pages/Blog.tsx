import { Hidden } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

// Define the type for the data array
type BlogPost = {
  imageUrl: string;
  title: string;
  creationDate: string;
}[];

const useStyles = makeStyles((theme) => ({
  table: {
    fontFamily: 'Optima, sans-serif',
    maxWidth: 1250,
    margin: 'auto',
  },
  image: {
    width: '150px', // Adjust the image size as needed
  },
}));

export function Blog() {
  const classes = useStyles();
  const data: BlogPost = [
    {
      imageUrl: '/Chicago1.png',
      title: 'My trip to Chicago... why am I still asleep?',
      creationDate: 'October 15, 2023',
    },
    {
      imageUrl: '/Chicago2.png',
      title: 'My trip to Chicago... why am I still asleep?',
      creationDate: 'October 15, 2023',
    },
  ];
  return (
    <Box>
      <Typography
        variant="h3"
        fontFamily={'Optima, sans-serif'}
        display={'flex'}
        justifyContent={'center'}
        paddingBottom={2}
      >
        Posts
      </Typography>
      <Table className={classes.table}>
        <TableBody>
          {data.map((post, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" flexDirection={'column'}>
                    <img src={post.imageUrl} alt="Blog Post" className={classes.image} />
                    <Hidden mdUp>
                      <Typography variant="body1" sx={{ fontFamily: 'Optima, sans-serif' }}>
                        {post.creationDate}
                      </Typography>
                    </Hidden>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, sans-serif', position: 'relative' }}
                    style={{ paddingLeft: 20 }}
                  >
                    {post.title}
                  </Typography>
                </Box>
              </TableCell>
              <Hidden mdDown>
                <TableCell>
                  <Typography variant="body1" sx={{ fontFamily: 'Optima, sans-serif' }}>
                    {post.creationDate}
                  </Typography>
                </TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
