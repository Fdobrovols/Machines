
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';

import { App } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <BrowserRouter basename="/Machines">
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
