import Banner from '@/Components/Banner';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';
import ItemList from '@/Components/ItemList';

export const MainPage = () => (
  <>
    <Header />
    <Banner />
    <ItemTitle />
    <ItemList itemName="원씽 The One Thing" itemPrice="500" itemState="대여가능" />
  </>
);

export default MainPage;
