import './style.css';
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"

import { BrowserRouter } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Signup />
            {/* <Login /> */}
        </BrowserRouter >
    );
}

export default App;
