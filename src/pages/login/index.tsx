import modo from '@/assets/modo.svg';
import banner from '@/assets/login-banner.svg';
import Input from '@/Components/Input';
import Button from '@/Components/Button';

export const LoginPage = () => (
  <main className="w-full min-w-[1920px] max-w-full flex">
    <section className="w-1/2 h-screen gap-10 bg-[#FDEEDF] flex items-center flex-col justify-center">
      <img src={modo} />
      <img src={banner} />
    </section>
    <section className="h-screen flex flex-col items-center justify-center w-1/2">
      <div className="w-1/2 mx-auto">
        <h1 className="text-left mb-14">로그인</h1>
        <form className="w-full flex flex-col gap-3">
          <Input label="아이디" identity="아이디" />
          <Input label="비밀번호" identity="비밀번호" />
          <Button isSubmit content="로그인" />
        </form>
        <p className="text-gray mt-5">아이디/비밀번호를 잊으셨나요?</p>
      </div>
      <span className="absolute text-gray flex gap-3 bottom-10">
        아직 회원이 아니신가요? <p className="text-black">회원가입 하러 가기</p>
      </span>
    </section>
  </main>
);

export default LoginPage;
