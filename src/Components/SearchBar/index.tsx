import React, { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="gray"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            className="w-full py-2 pl-10  text-start content-center rounded-xl border-0 bg-[#2925250D] text-md focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            value={search}
            onChange={onChange}
            placeholder="찾으시는 도서명, 상점명을 검색해주세요"
            required
          />
        </div>
      </form>
    </>
  );
}
