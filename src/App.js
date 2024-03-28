import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Auth from './Components/Auth/Auth';
import Login from './Components/Auth/Login';
import Portal from './Components/Portal/Portal';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <Router basename="/zedge">
        <Routes>
            <Route path="/" element={<Auth/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
            
            <Route path="portal" element={<Portal/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
