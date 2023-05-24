import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/Components/Button';
import { ReactComponent as Modo } from '@/assets/modo.svg';
import { ReactComponent as Banner } from '@/assets/login-banner.svg';
import Input from '@/Components/Input';

export const SignupPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
  });
  const handleSubmitButton: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));
    navigate('/signup2');
  };
  return (
    <main className="flex w-full min-w-[1270px]">
      <section className="w-1/2 h-screen gap-12 bg-[#FDEEDF] flex items-center flex-col justify-center">
        <Modo />
        <Banner />
      </section>
      <section className="h-screen flex flex-col items-center justify-center w-1/2">
        <div className="w-3/4 mx-auto">
          <h1 className="text-left mb-3">회원가입</h1>
          <form className="w-full flex flex-col" onSubmit={handleSubmit(handleSubmitButton)}>
            <Input
              label="아이디"
              identity="아이디"
              placehd="영문으로 입력해주세요."
              autoselected
              message={errors.userId?.message?.toString()}
              useButton
              isButtonContent="중복확인"
              context={register('userId', {
                required: '아이디를 입력하세요.',
              })}
            />
            <Input
              label="비밀번호"
              identity="비밀번호"
              placehd="영문,숫자 포함 8자 이상으로 입력해주세요."
              message={errors.userPw?.message?.toString()}
              context={register('userPw', {
                required: '비밀번호를 입력하세요',
                minLength: {
                  value: 6,
                  message: '6자리 이상 비밀번호를 사용하세요',
                },
              })}
            />
            <Input
              label="비밀번호 확인"
              identity="비밀번호 확인"
              placehd="비밀번호를 다시 한번 더 입력해주세요."
              message={errors.userPwCheck?.message?.toString()}
              context={register('userPwCheck', {
                required: '비밀번호를 입력하세요',
                minLength: {
                  value: 6,
                  message: '비밀번호가 다릅니다!',
                },
              })}
            />
            <Input
              label="닉네임 입력"
              identity="닉네임 입력"
              placehd="2글자 이상 입력해주세요."
              message={errors.userName?.message?.toString()}
              context={register('userName', {
                required: '닉네임을 입력하세요',
                minLength: {
                  value: 2,
                  message: '2자리 이상 닉네임을 사용하세요',
                },
              })}
            />
            <Input
              label="전화번호 인증"
              identity="전화번호 인증"
              placehd="- 없이 입력해주세요."
              autoselected
              message={errors.userPhonenum?.message?.toString()}
              useButton
              isButtonContent="중복확인"
              context={register('userPhonenum', {
                required: '',
              })}
            />
            <Input
              label="인증번호 입력"
              identity="인증번호 입력"
              placehd="인증번호를 입력해주세요."
              autoselected
              message={errors.authNumber?.message?.toString()}
              context={register('authNumber', {
                required: '',
              })}
            />
            <div className="py-3" />
            <Button isSubmit content="다음" disabled={isSubmitting} color="gray" />
          </form>
        </div>
        <span className=" text-gray flex gap-3 bottom-10 whitespace-nowrap">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-yellow-600">
            로그인 하러 가기
          </Link>
        </span>
      </section>
    </main>
  );
};

export default SignupPage;
