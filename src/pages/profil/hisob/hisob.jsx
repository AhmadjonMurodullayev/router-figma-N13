import React from "react";
import style from "./style.module.scss";
import hamyon from "../../../assets/hamyon.png";
import payme from "../../../assets/payme.png";
import clic from "../../../assets/clik.png";
export default function Hisob() {
  return (
    <div className={style.all}>
      <h1>Э-Хисоб</h1>
      <div className={style.box}>
        <div className={style.text}>
          <h5>Баланс</h5>
          <h3>45 000 сўм</h3>
        </div>
        <div>
          <img src={hamyon} alt="" />
        </div>
      </div>
      <div className={style.tullov}>
        <div className={style.payme}>
          <img src={payme} alt="" />
        </div>
        <div className={style.clic}>
          <img src={clic} alt="" />
        </div>
      </div>
    </div>
  );
}
