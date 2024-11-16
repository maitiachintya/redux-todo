// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <LanguageIcon sx={{ color: 'white' }} />
                <Typography variant="h5" component="div" sx={{ color: 'white', marginRight: 2 }}>
                    My ListsWeb
                </Typography>
                <Link href="/" variant="h6" underline="hover" color="inherit" sx={{ ml: 2 }}>
                    HOME
                </Link>
                <Link href="todo-page" variant="h6" underline="hover" color="inherit" sx={{ ml: 2 }}>
                    TODO
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
