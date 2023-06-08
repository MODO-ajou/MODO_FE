import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import toast from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import Button from '@/Components/Button';
import { ReactComponent as Modo } from '@/assets/modo.svg';
import { ReactComponent as Banner } from '@/assets/login-banner.svg';
import Map from '@/Components/Map';
import SearchBar from '@/Components/SearchBar';

export const LocationValidationPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = () => {
    // alert(JSON.stringify(data));
    toast.fire({
      icon: 'success',
      title: '회원가입을 축하드립니다!',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/');
  };
  useEffect(() => {
    document.querySelector('body')!.style.width = '100%';

    return () => {
      document.querySelector('body')!.style.width = '1270px';
      document.querySelector('body')!.style.margin = '0 auto';
    };
  }, []);
  return (
    <main className="flex w-full min-w-[1270px]">
      <section className="w-1/2 h-screen gap-12 bg-[#FDEEDF] flex items-center flex-col justify-center">
        <Modo />
        <Banner />
      </section>
      <section className="h-screen flex flex-col items-center justify-center w-1/2">
        <div className="mx-auto">
          <h1 className="text-left mb-3">위치인증</h1>
          <h3 className="text-left text-gray mb-3">당신의 도서관 위치를 설정해주세요.</h3>
          <form className="w-full flex flex-col" onSubmit={handleSubmit(handleSubmitButton)}>
            <Map />
            <div className="flex flex-col">
              <div className="py-1" />
              <SearchBar content="경기도 수원시 영통구 원천동 월드컵로 206" />
              <div className="py-3" />
              <Button isSubmit content="다음" disabled={isSubmitting} color="brown1" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LocationValidationPage;
