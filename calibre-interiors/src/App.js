import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from "./componets/Home";
import Interior from './componets/Interior';
import Services from './componets/Services';
import AboutUs from './componets/AboutUs';
import Contact from './componets/Contact';

function App() {
  return (

    <Router>
      <Routes>
        <Route path= "/" element = {<Home/>}> </Route>
        <Route path= "/interior" element = {<Interior/>}> </Route>
        <Route path= "/services" element = {<Services/>}> </Route>
        <Route path= "/aboutus" element = {<AboutUs/>}> </Route>
        <Route path= "/contact" element = {<Contact/>}> </Route>
        </Routes>
    </Router>

   
  );
}

export default App;
