import './App.css'

import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router/index.ts';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import LoadPage from "./pages/load"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={
                  <div>
                    <LoadPage />
                  </div>
                }>
                  <route.component />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
