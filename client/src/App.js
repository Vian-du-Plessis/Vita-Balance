import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import './assets/base.scss';
import Test from "./components/pages/Test";

function App() {
    return (
        <div className="App">
            <Nav/>

            <Routes>
                <Route path='/about' element = {<About />} />
                <Route path='/Compare' element = {<Nav />} />
                <Route path='/test' element = {<Test/>} />
            </Routes>
        </div>
    );
}

export default App;
