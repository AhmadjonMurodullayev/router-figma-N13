import React from "react";
import style from './style.module.scss';
import banner from '../../assets/banner1.svg'

export const Hero = ({ data }) => {
  console.log(data);
  
    return (
    <div className={style.container}>
        <div className={style.flex}>

      <div className={style.grid_container}>
<img src={banner} alt="" />        
        {data.map((item) => {
            return (
                <div key={item.id} className={style.hero_box}>
              <div className={style.hero_box_item}>
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.right}>
        <h1>Китоб ўқишни ёқтирасизми?</h1>
        <p>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
        <button  className={style.button}>Обуна бўлиш</button>
      </div>
        </div>
    </div>
  );
};
