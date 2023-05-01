import { useReducer, useEffect } from 'react';

import { ButtonProps } from './types';
import ButtonReducer from './buttonReducer';

export default function Button(props: ButtonProps) {
  const { content = 'Button', isSecondary = false, isSubmit = false, color = 'brown1' } = props;
  const [colorHeirarchy, dispatchHeirarchy] = useReducer(ButtonReducer, '');

  useEffect(() => {
    dispatchHeirarchy({ isSecondary, type: color });
  }, []);

  const ButtonStyle = `py-3 px-11 text-[20px] rounded-xl border-2 hover:cursor-pointer ${colorHeirarchy}`;

  return (
    <>
      {!isSubmit && (
        <a className={ButtonStyle} href="/ee">
          {content}
        </a>
      )}
      {isSubmit && <button className={ButtonStyle}>{content}</button>}
    </>
  );
}
