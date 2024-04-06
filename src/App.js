
import Home from './components/Home';
import Login from './components/Login';
import './App.css'
import SignUp from './components/SignUp';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import MyOrder from './components/MyOrder';

function App() {
  return (
   
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}></Route>
          <Route exact path = "/login" element = {<Login/>}></Route>
          <Route exact path = "/createuser" element = {<SignUp/>}></Route>
          <Route exact path = "/myorders" element = {<MyOrder/>}></Route>
        </Routes>
      </div>
     
    </Router>
   
  );
}

export default App;
