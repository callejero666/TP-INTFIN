import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './componentes/Login';
import { Registro } from './componentes/Registro';
import { Principal } from './componentes/Principal';
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/principal" element={<Principal />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
