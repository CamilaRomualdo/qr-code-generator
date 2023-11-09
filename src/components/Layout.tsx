import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Copyright } from './Copyright';
import QrCode from './QrCode';

import { BsFillSuitHeartFill } from "react-icons/bs";

export const Layout = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Container component="main" sx={{ mt: 5, mb: 1 }} maxWidth="sm">
            <Typography sx={{ textAlign: "center" }} variant="h3" gutterBottom>
                QR Code Generator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {'Enter any web address, generate its QR code, and download it in the highest quality by saving it as an SVG file.'}
            </Typography>
            <Typography variant="caption">Enter a url bellow:</Typography>
            <QrCode />
        </Container>
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: "#FC5130"
            }}
        >
            <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="caption" color="#FFFAFF">
                    Made with <BsFillSuitHeartFill style={{color: 'white', margin: '0px 5px 0 5px'}}/> by Camila Romualdo
                </Typography>
                <Copyright />
            </Container>
        </Box>
    </Box>
)
