import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path={'/login'}>
            Login...
          </Route>
          <Route path={'/admin'}>
            Admin...
          </Route>
          <Route path={'/'} exact>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
