import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import { useSelector } from 'react-redux';
import HackathonPage from './scenes/hackathonPage';
import HackerProfilePage from './scenes/hackerProfilePage';
import HackathonDetail from './scenes/hackathonDetail';
function App() {
  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/hackathons" element={<HackathonPage />} />
        <Route path="/profile" element={<HackerProfilePage />} />
        <Route
          path="/hackathondetail"
          element={<HackathonDetail></HackathonDetail>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
