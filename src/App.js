import './App.css';
//Dependencies
import {Route} from 'react-router-dom';
//Views
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects'
import About from './pages/About';


const URL = 'http://localhost:4000/';

function App() {
  return (
    <div className="App">
      <Header/>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/projects">
        <Projects URL={URL}/>
       </Route>
       <Route path="/about">
        <About URL={URL}/>
       </Route>
       <Footer/>
     
    </div>
  );
}

export default App;
