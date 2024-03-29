import { Routes, Route, useLocation } from 'react-router-dom';

import AddBook from '@/pages/addbook';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';
import MainPage from '@/pages/mainpage';
import MyPage from '@/pages/mypage';

// import AddReview from '@/pages/addreview';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
