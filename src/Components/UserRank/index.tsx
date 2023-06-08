import { ReactComponent as Banner } from '@/assets/login-banner.svg';

// import { UserRankProps } from './types';

export default function UserRank() {
  const RankList = [
    {
      UserRankName: '허두영',
      UserRankGrade: '1위',
    },
    {
      UserRankName: '박시연',
      UserRankGrade: '2위',
    },
    {
      UserRankName: '구범준',
      UserRankGrade: '3위',
    },
  ];

  return (
    <>
      <div className="flex flex-col ">
        {RankList.map((item, idx) => (
          <div
            key={idx}
            className="flex w-1/4 gap-1 my-1 place-items-center w-[210px] h-[94px] border rounded-xl border-gray"
          >
            <Banner className=" flex w-[60px]  h-[50px] mx-3 w-1/4 relative  border border-gray rounded-md"></Banner>
            <div className="flex flex-col w-3/4">
              <div className="mx-2 font-semibold text-[12px] flex">
                <div className="text-[14px] font-bold ">{item.UserRankName}</div>의 도서관
              </div>
              <div className="mx-2 text-[10px] ">{item.UserRankGrade}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
