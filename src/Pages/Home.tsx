import '@fontsource/montserrat';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Hidden, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const PATHFINDER_LABEL = 'Pathfinder';
const PATHFINDER_BULLETS = (
    <ul>
        <li>Visualizes graph algorithms such as BFS, DFS, Dijkstra, and A* Search</li>
        <li>Can be configuired to traverse entire graph or search for a specific goal node</li>
        <li>Once traversal finishes, can show the shortest detected path to any traversed node</li>
    </ul>
);
const TREE_TRAVERSER_LABEL = 'Binary Tree Traverser';
const TREE_TRAVERSER_BULLETS = (
    <ul>
        <li>
            Visualizes tree traversal algorithms such as Inorder, PreOrder, and PostOrder traversals, as well as BFS
        </li>
        <li>Generates randomly-structured trees, so every traversal is unique</li>
        <li>Allows user to click through traversal on a step-by-step basis</li>
    </ul>
);
const SORTING_ALG_LABEL = 'Sorting Algorithm Visualizer';
const SORTING_ALG_BULLETS = (
    <ul>
        <li>Visualizes popular sorting algorithms like QuickSort, HeapSort, InsertionSort, and BubbleSort</li>
        <li>Generates random lists, so every sort is unique</li>
        <li>Allows user to choose multiple sorting speeds for easier visualization</li>
    </ul>
);

const WEBSITE_LABEL = 'This Website!';
const WEBSITE_BULLETS = (
    <ul>
        <li>Built with React (TypeScript) and Material-UI</li>
        <li>Hosted with AWS S3 and CloudFront</li>
        <li>Blog back-end built with AWS Lambda, S3, and DynamoDB</li>
    </ul>
);

const BULLETS = [PATHFINDER_BULLETS, TREE_TRAVERSER_BULLETS, SORTING_ALG_BULLETS, WEBSITE_BULLETS];
const LABELS = [PATHFINDER_LABEL, TREE_TRAVERSER_LABEL, SORTING_ALG_LABEL, WEBSITE_LABEL];
const IMAGE_PATHS = ['graph.png', 'binary-tree.png', 'parenthesis.png', 'website-icon.png'];
const IMAGE_SIZES = [80, 70, 80, 80];

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        width: 1000,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
    },
    profilePhoto: {
        borderRadius: 20,
        height: 300,
        width: 300,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            left: 50,
        },
        boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.5)',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            height: 'auto',
            marginBottom: 20,
            width: '100%',
        },
    },
    mobileViewTableTopRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        top: 10,
    },
    mobileViewTableTopRowImage: {
        borderRadius: 5,
        position: 'absolute',
    },
}));

export function Home() {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.container}>
                <Stack spacing={2}>
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
                        <Hidden mdUp>
                            <Box component="img" className={classes.profilePhoto} alt="Logo" src="ProfilePic.png" />
                        </Hidden>
                        <Box className={classes.textContainer}>
                            <Typography variant="h6" color="black" fontSize={25}>
                                I'm Mike, a software engineer based in Seattle. I'm originally from Massachusetts, and I
                                graduated from the University of Massachusetts Amherst with a degree in Computer
                                Engineering. In my free time, I like to exercise, listen to audiobooks, make YouTube
                                videos, and create awesome coding projects! Feel free to browse around this website to
                                learn more about me!
                            </Typography>
                            <Hidden mdDown>
                                <Box component="img" className={classes.profilePhoto} alt="Logo" src="ProfilePic.png" />
                            </Hidden>
                        </Box>
                    </Box>
                    <Typography variant="h2" fontWeight={'bold'} display={'flex'} justifyContent={'left'}>
                        Personal Projects
                    </Typography>
                    <Hidden mdDown>
                        <Table sx={{ position: 'relative', bottom: 20 }}>
                            <TableBody>
                                {LABELS.map((value, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                <Box display="flex" alignItems="center">
                                                    <Typography
                                                        variant="h5"
                                                        component="a"
                                                        href="https://www.example.com"
                                                        color="secondary"
                                                    >
                                                        {value}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box display="flex" alignItems="center">
                                                    <Typography variant="h5">{BULLETS[index]}</Typography>
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
                                                    src={IMAGE_PATHS[index]}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Hidden>
                    <Hidden mdUp>
                        <Table sx={{ position: 'relative' }}>
                            <TableBody>
                                {LABELS.map((value, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                <Box display="flex" alignItems="center">
                                                    <Box display="flex" flexDirection={'column'}>
                                                        <Box className={classes.mobileViewTableTopRow}>
                                                            <Typography
                                                                variant="h5"
                                                                component="a"
                                                                href="https://www.example.com"
                                                                color="secondary"
                                                            >
                                                                {value}
                                                            </Typography>
                                                            <Box
                                                                component="img"
                                                                className={classes.mobileViewTableTopRowImage}
                                                                sx={{
                                                                    right: -20,
                                                                    height: IMAGE_SIZES[index],
                                                                    width: IMAGE_SIZES[index],
                                                                }}
                                                                alt="Logo"
                                                                src={IMAGE_PATHS[index]}
                                                            />
                                                        </Box>
                                                        <Typography variant="h5">{BULLETS[index]}</Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Hidden>
                </Stack>
            </Box>
        </Box>
    );
}
