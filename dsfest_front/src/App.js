import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from './pages/Main';
import Event from './pages/EventPage';
import Notice from './pages/NoticePage';
import Detail from './components/Notice/NoticeDetail';
import Splash from './components/Splash/Splash';
import Review from './pages/ReviewPage';
import WriteReview from './pages/WriteReviewPage';
import Schedule from './pages/SchedulePage';
import Footer from '../src/components/Main/Footer';
import Navbar from '../src/components/Main/Navbar';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                {window.location.pathname !== '/splash' && <Navbar />}
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/splash" element={<Splash />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/write" element={<WriteReview />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Routes>
                {window.location.pathname !== '/splash' && <Footer />}
            </>
        </BrowserRouter>
    );
}

export default App;
