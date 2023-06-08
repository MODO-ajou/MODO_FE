import Banner from '@/Components/Banner';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';
import ItemList from '@/Components/ItemList';
import UserRank from '@/Components/UserRank';

export const MainPage = () => (
  <>
    <Header />
    <Banner />
    <div className="flex-col my-1 bg-btown">
      <div className="flex">
        <div className="w-5/6">
          <ItemTitle itemMainTitle="수원시" itemSubTitle="의 매물" itemToggle={true} />
          <div className="w-[1200px] w-full gap-3 py-3 flex flex-wrap">
            <ItemList />
          </div>
        </div>
        <div className="w-1/6">
          <ItemTitle itemMainTitle="" itemSubTitle="사용자 랭킹" itemToggle={true} />
          <div className="py-2 flex-col">
            <UserRank />
          </div>
          <ItemTitle itemMainTitle="" itemSubTitle="사용자 랭킹" itemToggle={true} />
          <div className="py-2 flex-col">
            <UserRank />
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  </>
);

export default MainPage;
