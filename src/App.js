import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/Home.screen";
import NotFound from "./Screens/NotFound.screen";
import FinalScreen from "./Screens/Final.screen";
import QuestionsScreen from "./Screens/Questions.screen";
import SettingsScreen from "./Screens/Settings.screen";

import GameBar from "./Components/GameBar";
import TimerBar from "./Components/TimerBar";

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route path="questions" element={<QuestionsScreen />} />
                        <Route path="score" element={<FinalScreen />} />
                        <Route path="settings" element={<SettingsScreen />} />
                        <Route path="test" element={<GameBar questionIndex={3} totalQuestions={6} />} />
                        <Route path="test2" element={<TimerBar second={5} countTime={15} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
