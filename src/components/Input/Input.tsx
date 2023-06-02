import { forwardRef } from "react";
import style from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, any>((props, ref) => {
  return (
    <div>
      <input ref={ref} className={style.input} type="text" {...props} />
    </div>
  );
});
Input.displayName = "Input";

export default Input;
