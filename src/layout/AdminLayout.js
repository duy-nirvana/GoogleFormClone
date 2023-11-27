import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

function AdminLayout(props) {
    return (
        <AppBar position="static">
            <Toolbar
                disableGutters
                sx={{ backgroundColor: 'white', color: '#000', paddingX: 2 }}>
                <Typography>FORM</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AdminLayout;
