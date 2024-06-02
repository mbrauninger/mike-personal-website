import { Hidden } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { BLOG_PATH } from '../constants';

// Define the type for the data array
type BlogPost = {
    imageUrl: string;
    title: string;
    creationDate: string;
}[];

const useStyles = makeStyles((theme) => ({
    table: {
        maxWidth: 1250,
        margin: 'auto',
    },
    image: {
        width: '150px', // Adjust the image size as needed
    },
    tableRow: {
        '&:hover': {
            backgroundColor: '#CFD4CF',
            cursor: 'pointer',
        },
    },
}));

export function Blog() {
    const classes = useStyles();
    const navigate = useNavigate();
    const data: BlogPost = [
        {
            imageUrl: '/Chicago1.png',
            title: 'Blog posts to come soon!',
            creationDate: 'June 1, 2024',
        },
    ];
    return (
        <Box>
            <Typography variant="h3" display={'flex'} justifyContent={'center'} paddingBottom={2}>
                Posts
            </Typography>
            <Table className={classes.table}>
                <TableBody>
                    {data.map((post, index) => (
                        <TableRow
                            key={index}
                            className={classes.tableRow}
                            onClick={() => {
                                navigate(`/${BLOG_PATH}/post`);
                            }}
                        >
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <Box display="flex" alignItems="center" flexDirection={'column'}>
                                        <img src={post.imageUrl} alt="Blog Post" className={classes.image} />
                                        <Hidden mdUp>
                                            <Typography variant="body1">{post.creationDate}</Typography>
                                        </Hidden>
                                    </Box>
                                    <Typography variant="h5" style={{ paddingLeft: 20 }}>
                                        {post.title}
                                    </Typography>
                                </Box>
                            </TableCell>
                            <Hidden mdDown>
                                <TableCell>
                                    <Typography variant="body1">{post.creationDate}</Typography>
                                </TableCell>
                            </Hidden>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
