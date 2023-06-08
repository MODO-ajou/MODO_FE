import { Link, useNavigate } from 'react-router-dom';
import { BsPlusSquare, BsHeart, BsBook, BsChat, BsPeople } from 'react-icons/bs';
import React from 'react';
import toast from 'sweetalert2';

import { ReactComponent as MODO } from '@/assets/small-modo.svg';

interface INavBarList {
  icons: React.ReactElement;
  text: string;
  goTo: string;
}

export const Header = () => {
  const navigate = useNavigate();

  const NavBarList: INavBarList[] = [
    {
      icons: <BsPlusSquare />,
      text: '책 빌려주기',
      goTo: 'addbook',
    },
    {
      icons: <BsBook />,
      text: '대여현황',
      goTo: 'mainpage',
    },
    {
      icons: <BsHeart />,
      text: '위시리스트',
      goTo: 'mainpage',
    },
    {
      icons: <BsChat />,
      text: '채팅',
      goTo: 'mainpage',
    },
    {
      icons: <BsPeople />,
      text: '마이 페이지',
      goTo: 'mypage',
    },
  ];
  return (
    <header className="w-full flex py-3 justify-between ">
      <MODO
        className="py-3 cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      />
      <div>
        <div
          className="text-right text-sm cursor-pointer"
          onClick={() => {
            localStorage.clear();
            toast.fire({
              icon: 'error',
              title: '로그아웃 되었어요!',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/login');
          }}
        >
          로그아웃
        </div>
        <div className="flex  gap-2  py-3 justify-between last:border-none remove-border-right">
          {NavBarList.map((item, idx) => (
            <Link to={`/${item.goTo}`} key={idx}>
              <p className="flex border-r-2 border-gray justify-center items-center gap-2 px-3">
                {item.icons}
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
