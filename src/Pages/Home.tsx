import '@fontsource/montserrat';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Hidden, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

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
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
    },
}));

export function Home() {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.container}>
                <Stack spacing={2} maxWidth={1000}>
                    <Box>
                        <Typography
                            variant="h2"
                            fontWeight={'bold'}
                            display={'flex'}
                            justifyContent={'left'}
                            paddingBottom={2}
                        >
                            Hello!
                        </Typography>
                        <Box className={classes.textContainer}>
                            <Hidden mdUp>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 50,
                                        height: 300,
                                        width: 300,
                                    }}
                                    alt="Logo"
                                    src="ProfilePic.png"
                                />
                            </Hidden>
                            <Typography variant="h6" color="black" fontSize={25}>
                                I'm Mike, a software engineer based in Seattle. I'm originally from Massachusetts, and I
                                graduated from the University of Massachusetts Amherst with a degree in Computer
                                Engineering. In my free time, I like to exercise, listen to audiobooks, make YouTube
                                videos, and create awesome coding projects! Feel free to browse around this website to
                                learn more about me!
                            </Typography>
                            <Hidden mdDown>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 5,
                                        height: 300,
                                        width: 300,
                                        position: 'relative',
                                        left: 50,
                                        boxShadow: 24,
                                    }}
                                    alt="Logo"
                                    src="ProfilePic.png"
                                />
                            </Hidden>
                        </Box>
                    </Box>
                    <Typography variant="h2" fontWeight={'bold'} display={'flex'}>
                        Personal Projects
                    </Typography>
                    <Table sx={{ position: 'relative', bottom: 20 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography
                                            variant="h5"
                                            component="a"
                                            href="https://www.example.com"
                                            color="secondary"
                                        >
                                            Pathfinder
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h5">
                                            <ul>
                                                <li>Visualizes graph algorithms such as BFS, DFS, Dijkstra, and A* Search</li>
                                                <li>Can be configuired to traverse entire graph or search for a specific goal node</li>
                                                <li>Once traversal finishes, can show the shortest detected path to any traversed node</li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        component="img"
                                        sx={{
                                            borderRadius: 5,
                                            height: 100,
                                            width: 100,
                                            position: 'relative',
                                        }}
                                        alt="Logo"
                                        src="graph.png"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography
                                            variant="h5"
                                            component="a"
                                            href="https://www.example.com"
                                            color="secondary"
                                        >
                                            Binary Tree Traverser
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h5">
                                            <ul>
                                                <li>Visualizes tree traversal algorithms such as Inorder, PreOrder, and PostOrder traversals, as well as BFS</li>
                                                <li>Generates randomly-structured trees, so every traversal is unique</li>
                                                <li>Allows user to click through traversal on a step-by-step basis</li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        component="img"
                                        sx={{
                                            borderRadius: 5,
                                            height: 100,
                                            width: 100,
                                            position: 'relative',
                                        }}
                                        alt="Logo"
                                        src="binary-tree.png"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography
                                            variant="h5"
                                            component="a"
                                            href="https://www.example.com"
                                            color="secondary"
                                        >
                                            Sorting Algorithm Visualizer
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h5">
                                            <ul>
                                                <li>Visualizes popular sorting algorithms like QuickSort, HeapSort, InsertionSort, and BubbleSort</li>
                                                <li>Generates random lists, so every sort is unique</li>
                                                <li>Allows user to choose multiple sorting speeds for easier visualization</li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 100,
                                            width: 100,
                                            position: 'relative',
                                        }}
                                        alt="Logo"
                                        src="parenthesis.png"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography
                                            variant="h5"
                                            component="a"
                                            href="https://www.example.com"
                                            color="secondary"
                                        >
                                            This Website!
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h5">
                                            <ul>
                                                <li>Built with React (TypeScript) and Material-UI</li>
                                                <li>Hosted with AWS S3 and CloudFront</li>
                                                <li>Blog back-end built with AWS Lambda, S3, and DynamoDB</li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 100,
                                            width: 100,
                                            position: 'relative',
                                        }}
                                        alt="Logo"
                                        src="website-icon.png"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Stack>
            </Box>
        </Box>
    );
}
