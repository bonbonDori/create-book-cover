import './App.css'
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router/index.ts';

function App() {

  return (
    <HeroUIProvider>
      <>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </>
    </HeroUIProvider>
  )
}

export default App
