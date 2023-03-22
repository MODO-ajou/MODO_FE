import React, { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <input
          className="w-max py-2 display:flex rounded-xl border-0 bg-[#2925250D] text-md focus:ring-blue-500 focus:border-blue-500 "
          type="text"
          value={search}
          onChange={onChange}
          placeholder="찾으시는 도서명, 상점명을 검색해주세요"
          required
        />
      </div>
    </>
  );
}
