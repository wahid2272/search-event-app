import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <>
          <CssBaseline />
          <div className="appBody">
            <Navbar />
          </div>
          <Switch>
           <div className="container">
             <Route exact path="/about">
                <About />
             </Route>
           </div>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
