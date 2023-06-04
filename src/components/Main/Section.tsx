import style from "./Main.module.scss";
import { forwardRef } from "react";

export const Section = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={style.main}>
      <div className={style.mainContent}>
        <h2 className={style.heading}>
          OKAY, YOU&apos;VE FOUND ME
          <br />
          YAAY!
        </h2>
        <h2 className={style.heading}>WAIT... WAH!</h2>
        <h2 className={style.heading}>
          THINK YOU&apos;VE GOT ME
          <br />
          TRY AGAIN...
        </h2>
      </div>
    </div>
  );
});
Section.displayName = "Section";
