import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Information from "./pages/Info/Information";
import ScrollToTop from "./components/ScrollToTop";
import Staff from "./pages/Staff/Staff";
import Schedule from "./pages/Schedule/Schedule";
import Error from "./pages/Error/Error";
import Grid from './pages/Grid/Grid'
import Area from './pages/Grid/Area'
import Review from './pages/Grid/Reviews/Reviews'
import "./styles/null.scss";
import "./styles/style.sass";

function App() {
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <div className="page">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/информация" element={<Information />} />
            <Route path="/сотрудники" element={<Staff />} />
            <Route path="/расписание" element={<Schedule />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/area" element={<Area />} />
            <Route path="/review" element={<Review />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
