// import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'sweetalert2';

import BookInput from '@/Components/BookInput';
import BookSearchBar from '@/Components/BookSearchBar';
import Button from '@/Components/Button';
import Header from '@/Components/Header';
import ItemTitle from '@/Components/ItemTitle';

export const AddBook = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = () => {
    toast.fire({
      icon: 'success',
      title: '등록 성공!',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/mainpage');
  };
  // console.log(JSON.stringify(data));

  return (
    <>
      <Header />
      <form className="w-full flex flex-col" onSubmit={handleSubmit(handleSubmitButton)}>
        <div className="flex w-full">
          <div className="flex flex-col w-1/4 ">
            <ItemTitle itemMainTitle="도서 빌려주기" itemSubTitle=" " itemToggle={false} />
            <h3 className="text-left text-gray mb-3">빌려주고자 하는 책을 선택하세요.</h3>
            <BookSearchBar content="도서 제목을 검색해주세요." />
          </div>
          <div className="flex w-3/4 py-28 px-12 flex-col ">
            <BookInput />
            <div className="flex gap-2 py-8 justify-end ">
              <div onClick={() => navigate('/mainPage')}>
                <Button content="취소" color="brown2" />
              </div>
              <div>
                <Button isSubmit content="등록" color="brown2" disabled={isSubmitting} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBook;
