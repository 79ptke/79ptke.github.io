import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
// import AboutMe from "./components/AboutMe"; 
// import MyProject from "./components/MyProject";

function App() {
    return (
        <Router>
            <div className="App">
                <Header /> 
                <Main />
                {/* <Routes>
                  <Route path="/about_me" element={<AboutMe />} />
                  <Route path="/my_project" element={<MyProject />} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
