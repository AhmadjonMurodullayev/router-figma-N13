import React from "react";
import logo from "../../assets/Logo.svg";
import BarIcon from "../../assets/icons/bar";
import QidiruvIcon from "../../assets/icons/qidiruv";
import uzb from "../../assets/uzb.svg";
import UserIcon from "../../assets/icons/user";
import style from "./style.module.scss";
export default function Header() {
  return (
    <div className={style.container}>
  <header className={style.header}>
        <div className={style.header_logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.header_sorch}>
          <div className={style.header_sorch_box}>
            <BarIcon />
            <h3 className={style.header_h1}>Рукнлар</h3>
          </div>
          <div className={style.header_inputs}>
            <div className={style.header_inputbox}>
              <input className={style.header_input} type="text" placeholder="Қидириш" />
            </div>
           <div className={style.header_qidiruv}>
           <QidiruvIcon />
           </div>
          </div>
        </div>
        <div className={style.header_btns}>
          <button className={style.header_uzb}>
            <img src={uzb} alt="" /> Ўз
          </button>
          <button className={style.header_user}>
            <UserIcon /> Кириш
          </button>
        </div>
      </header>
 
    </div>
  );
}
