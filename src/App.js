import NavBar from '../src/components/NavBar'
import About from '../src/components/About'
import PDFViewer from '../src/components/Resume';
import './App.css';
import pdf from '../src/resume.pdf';
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
          <Route path="/resume">
            <NavBar></NavBar>
            <PDFViewer pdf={pdf}></PDFViewer>
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
