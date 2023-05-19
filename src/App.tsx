import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';
import Map from '@/Components/Map';

import SignupPage2 from './pages/signup2';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <>
              메인 페이지 입니다
              <Map></Map>
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup2" element={<SignupPage2 />} />
      </Routes>
    </>
  );
}

export default App;
