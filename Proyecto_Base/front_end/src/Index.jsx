import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider withNormalizeCSS withGlobalStyles>
                <Notifications position="bottom-center"/>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
