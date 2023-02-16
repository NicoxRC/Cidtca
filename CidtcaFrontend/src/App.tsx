import FormHome from './components/formHome/FormHome';
import Home from './components/home/Home';
import FormDetails from './components/formDetails/FormDetails';
import Login from './components/login/Login';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details/:id" component={FormDetails} />
        <Route exact path="/crear" component={FormHome} />
      </Switch>
    </div>
  );
}

export default App;
