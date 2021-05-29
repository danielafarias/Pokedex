import './App.css';
import React from 'react';
import CardList from './Componentes/CardList'
import Info from './Componentes/Info'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={CardList} />
        <Route path='/sobre/:id' component={Info} />
      </Switch>
      </BrowserRouter>
    </div>
  );}
}

export default App;
