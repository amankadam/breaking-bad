import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
       <Header/>
       <hr/>
       <Route exact path='/'component={Home}/>  
       <Route exact path='/:charId'component={CharacterDetails}/>
       
       </Router>
    </div>
  );
}

export default App;
