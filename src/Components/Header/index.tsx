import { Link } from 'react-router-dom';

import { ReactComponent as MODO } from '@/assets/small-modo.svg';

export const Header = () => (
  <>
    <header className="w-full flex py-3 justify-between">
      <MODO className="" />
      <div>
        <div className="text-right">로그아웃</div>
        <div className="flex gap-2 justify-between last:border-none">
          <Link to="/login">
            <p className="border-r-2 border-gray px-3">로그인하러 가기</p>
          </Link>
          <Link to="/login">
            <p className="border-r-2 border-gray px-3">로그인하러 가기</p>
          </Link>
          <Link to="/login">
            <p className="border-r-2 border-gray px-3">로그인하러 가기</p>
          </Link>
        </div>
      </div>
    </header>
  </>
);

export default Header;
