import { SessionContext } from './context/SessionContext';
import Home from './pages/Home';

function App() {
  return (
    <SessionContext>
      <Home />
    </SessionContext>
  );
}

export default App;
