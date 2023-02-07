import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Use something like react-router-dom to manage multiple pages/routes
    // <Route path='/' element={<Home />}/>
function Home () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App.App />} />
                <Route path="/test" element={<App.test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;
