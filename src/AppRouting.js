import { Box } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';

const AppRouting = (props) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<AdminLayout />}></Route>
        </Routes>
    );
};

export default AppRouting;
