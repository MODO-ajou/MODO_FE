import Banner from '@/Components/Banner';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';
import ItemList from '@/Components/ItemList';
import UserRank from '@/Components/UserRank';

const MyPage = () => (
  <div className=" min-h-screen">
    <Header />
    <Banner />

    <div className="flex-col my-5">
      <div className="flex">
        <div className="w-5/6">
          <ItemTitle itemMainTitle="수원시" itemSubTitle="의 매물" itemToggle={true} />
          <ItemList />
        </div>
        <div className="w-1/6">
          <ItemTitle itemMainTitle="" itemSubTitle="사용자 랭킹" itemToggle={true} />
          <UserRank />
        </div>
      </div>
      <div className="flex">
        <div className="w-4/5">
          <ItemTitle itemMainTitle="최신 매물" itemSubTitle="" itemToggle={true} />
          <ItemList />
        </div>
        <div className="w-1/5">
          <ItemTitle itemMainTitle="" itemSubTitle="인기 대여 책" itemToggle={true} />
          <UserRank />
        </div>
      </div>
    </div>
  </div>
);

export default MyPage;
