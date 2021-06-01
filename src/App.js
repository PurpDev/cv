import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Knowledges from './pages/Knowledges'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


const App = () => {
  return (
   <> 
     <BrowserRouter>
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Contact" component={Contact} />
       <Route path="/Compétences" component={Knowledges} />
       <Route path="/Portfolio" component={Portfolio} />
       <Route  component={NotFound} />
     </Switch>
    </BrowserRouter>
  </>
  );
};

export default App;
