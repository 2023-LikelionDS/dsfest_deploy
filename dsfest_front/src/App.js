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
import Error from './pages/errorpage';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                {window.location.pathname !== '/' && <Navbar />}
                <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/main" element={<Main />} index />
                    <Route path="/event" element={<Event />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/write" element={<WriteReview />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                {window.location.pathname !== '/' && <Footer />}
            </>
        </BrowserRouter>
    );
}

export default App;
