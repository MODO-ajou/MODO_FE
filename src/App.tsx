import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<>메인 페이지 입니다</>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
