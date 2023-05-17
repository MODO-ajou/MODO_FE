import { InputProps } from './types';

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
    autoselected = false,
  } = props;

  return (
    <>
      <label className="text-[1.1rem] py-2" htmlFor={identity}>
        {label}
      </label>
      <input
        className="px-4 py-3 border-2 border-[#aaaaaa] rounded"
        id={identity}
        type="input"
        placeholder={placehd}
        autoFocus={autoselected}
        {...context}
        {...props}
      />
      <p className="text-red text-[0.875rem] py-1 mb-1">{message}</p>
    </>
  );
};

export default Input;
