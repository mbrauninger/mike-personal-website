import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    centeredContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1000,
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        margin: 'auto', // Center horizontally
        flexDirection: 'column',
    },
    image: {
        maxWidth: 1000,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        padding: 20,
    },
}));

interface ImageWithCaptionProps {
    path: string;
    caption: string;
}

function ImageWithCaption(props: ImageWithCaptionProps) {
    const classes = useStyles();

    return (
        <Box className={classes.centeredContent} paddingBottom={3}>
            <img src={props.path} alt="Chicago" className={classes.image} />
            <Typography variant="h4" lineHeight={1.5} fontSize={20} textAlign={'center'}>
                {props.caption}
            </Typography>
        </Box>
    );
}

interface ParagraphProps {
    text: string;
}

function Paragraph(props: ParagraphProps) {
    return (
        <Typography variant="h4" lineHeight={1.5} fontSize={20} paddingBottom={3}>
            {props.text}
        </Typography>
    );
}

export function BlogPost() {
    const classes = useStyles();

    return (
        <Box className={classes.centeredContent}>
            <Typography variant="h2">Hello World!</Typography>
            <Typography fontSize={20} paddingBottom={2}>
                October 15, 2023
            </Typography>
            <Paragraph text="Hey everyone! This is just a sample of what's to come in this blog. I'm currently building the infrastructure to drive the website functionality. I'm going to fill the rest of this post with dummy content, for the time being." />
            <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla a metus malesuada facilisis. Phasellus dictum odio non justo dictum, at efficitur metus ultrices. Vivamus euismod dui id purus ultrices, in tristique nulla bibendum. Aliquam erat volutpat. Nullam laoreet orci id justo finibus, eu vulputate ligula semper. Sed volutpat sagittis eros, a facilisis libero consectetur nec. Maecenas eu lacinia justo. Fusce posuere auctor risus, id ultrices dolor elementum sed. Integer luctus scelerisque libero, ut lacinia ante. Ut id augue ut ex fermentum vulputate at id nulla. Praesent convallis ac est ac malesuada. Cras vestibulum urna non quam viverra, sed fringilla dolor pharetra. Nullam quis mauris a ante tincidunt tincidunt. Proin ultrices nec urna non bibendum." />
            <ImageWithCaption
                path="/Chicago1.png"
                caption={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <Paragraph
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla a metus malesuada facilisis. Phasellus
        dictum odio non justo dictum, at efficitur metus ultrices. Vivamus euismod dui id purus ultrices, in tristique
        nulla bibendum. Aliquam erat volutpat. Nullam laoreet orci id justo finibus, eu vulputate ligula semper. Sed
        volutpat sagittis eros, a facilisis libero consectetur nec. Maecenas eu lacinia justo. Fusce posuere auctor
        risus, id ultrices dolor elementum sed. Integer luctus scelerisque libero, ut lacinia ante. Ut id augue ut ex
        fermentum vulputate at id nulla. Praesent convallis ac est ac malesuada. Cras vestibulum urna non quam viverra,
        sed fringilla dolor pharetra. Nullam quis mauris a ante tincidunt tincidunt. Proin ultrices nec urna non
        bibendum."
            />
        </Box>
    );
}
