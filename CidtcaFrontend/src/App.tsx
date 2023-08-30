import Home from './components/pages/home/Home';
import NewForm from './components/pages/newForm/NewForm';
import FormDetails from './components/pages/formDetails/FormDetails';
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
        <Route exact path="/crear" component={NewForm} />
      </Switch>
    </div>
  );
}

export default App;
