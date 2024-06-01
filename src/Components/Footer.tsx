import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

export function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                width: '100%',
                height: 125,
                backgroundColor: '#3b3b3b',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                gap: 10,
            }}
        >
            <Typography sx={{color: "White", position: "absolute", right: 200}}>
                © 2024 Mike Brauninger. All rights reserved.
            </Typography>
            <Box
                component="img"
                sx={{
                    height: 75,
                    width: 75,
                    '&:hover': {
                        filter: 'grayscale(100%) opacity(70%)',
                      },
                      cursor: 'pointer',
                }}
                alt="Logo"
                src="linkedin-app-white-icon.png"
            />
            <Box
                component="img"
                sx={{
                    height: 100,
                    width: 100,
                    '&:hover': {
                        filter: 'grayscale(100%) opacity(70%)',
                      },
                      cursor: 'pointer',
                }}
                alt="Logo"
                src="youtube-icon-white.png"
            />
            <Box
                component="img"
                sx={{
                    height: 90,
                    width: 90,
                    '&:hover': {
                        filter: 'grayscale(100%) opacity(70%)',
                      },
                      cursor: 'pointer',
                }}
                alt="Logo"
                src="github-icon.png"
            />
        </Box>
    );
}
