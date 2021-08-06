import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SessionContext } from './context/SessionContext';
import Home from './pages/Home';
import Pomodoro from './pages/Pomodoro';

function App() {
  return (
    <SessionContext>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pomodoro" component={Pomodoro} />
        </Switch>
      </Router>
    </SessionContext>
  );
}

export default App;
