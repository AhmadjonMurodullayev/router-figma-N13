import React from "react";
import logs from "../../../assets/footerrs.png";
import style from "./style.module.scss";
import { Footer } from "../../../layout/footer/footer";

export default function Obuna() {
  return (
    <div className={style.all}>
      <div className={style.logs}>
        <div className={style.log_title}>
          <h1>Узингиз севган булимга обуна бўлинг</h1>
        </div>
        <img src={logs} alt="" />
      </div>

      <div className={style.obuna}>
        <div className={style.obuna_box}>
          <h1 className={style.h11}>Обуна</h1>
        
          <div className={style.option}>
            <h4 className={style.h3}>Обуна давом этиш вакти</h4>
            <div className={style.selects}>
              <select className={style.select} >
                <option value="olma">30 кун</option>
                <option value="uzum">30 кун</option>
                <option value="anor">30 кун</option>
                <option value="banan">30 кун</option>
              </select>
            </div>
          </div>
          <div className={style.option}>
            <h4 className={style.h3}>Обуна давом этиш вакти</h4>
            <div className={style.selects}>
              <select className={style.select} >
                <option value="olma">30 кун</option>
                <option value="uzum">30 кун</option>
                <option value="anor">30 кун</option>
                <option value="banan">30 кун</option>
              </select>
            </div>
          </div>
          <h2  className={style.h11}>Обуна 30 кун давом этади</h2>
        </div>

        <div className={style.obuna_box2}>
          <div className={style.box2_text}>
            <div className={style.titls_box}>
              <p>Бошланиш вакти</p>
              <h4>12/09/2021</h4>
            </div>
            <div className={style.titls_box}>
              <p>Бошланиш вакти</p>
              <h4>12/09/2021</h4>
            </div>
            <div className={style.titls_box}>
              <p>Бошланиш вакти</p>
              <h4>12/09/2021</h4>
            </div>
          </div>
          <button>Обуна булиш</button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    
  );
}
