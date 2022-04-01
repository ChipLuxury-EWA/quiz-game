import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from './Screens/Home.screen'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<HomeScreen />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
