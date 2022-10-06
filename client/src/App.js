import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import './assets/base.scss';

function App() {
    return (
        <div className="App">
            <Nav/>

            <Routes>
                <Route path='/about' element = {<About />} />
                <Route path='/Compare' element = {<Nav />} />
            </Routes>
        </div>
    );
}

export default App;
