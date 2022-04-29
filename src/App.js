import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div class="app">
            {/* <Header /> */}

            <PortfolioContainer />

            <Footer />
        </div>
    )
};

export default App;