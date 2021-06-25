import NavBar from '../src/components/NavBar'
import About from '../src/components/About'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/projects">
            <NavBar></NavBar>
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <NavBar></NavBar>
            <Contact></Contact>
          </Route>
          <Route path="/">
            <NavBar/>
            <About/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
