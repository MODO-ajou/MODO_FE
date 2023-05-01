import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  identity: string;
  label: string;
  placehd?: string;
  message?: string;

  context?: UseFormRegisterReturn;
}

/**
 * @param message 상태 메세지 입력
 * @param label Input 라벨 입력
 * @param placehd Input Placeholder 입력
 * @param context react-hook-form 설정 추가
 */
const Input = (props: InputProps) => {
  const {
    context,
    identity,
    label = '입력',
    message = '',
    placehd = `${label}를 입력해주세요`,
  } = props;

  return (
    <>
      <label className="text-[1.1rem]" htmlFor={identity}>
        {label}
      </label>
      <input
        className="px-4 py-3 mb-1 border-2 border-[#aaaaaa] rounded"
        id={identity}
        type="input"
        placeholder={placehd}
        {...context}
        {...props}
      />
      <p>{message}</p>
    </>
  );
};

export default Input;
