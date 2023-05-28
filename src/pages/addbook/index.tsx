import BookSearchBar from '@/Components/BookSearchBar';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';

export const AddBook = () => (
  <>
    <Header />
    <div className="flex flex-col w-1/4 ">
      <ItemTitle itemMainTitle="도서 빌려주기" itemSubTitle=" " itemToggle={false} />
      <h3 className="text-left text-gray mb-3">빌려주고자 하는 책을 선택하세요.</h3>
      <BookSearchBar content="도서 제목을 검색해주세요." />
    </div>
    <div className="flex flex-col w-3/4"></div>
  </>
);

export default AddBook;
