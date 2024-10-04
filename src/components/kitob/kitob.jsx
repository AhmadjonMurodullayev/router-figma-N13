import React from "react";
import style from './style.module.scss'
import { NavLink } from "react-router-dom";
export default function Kitob({ data,title }) {
  console.log(data);
  return (
   <div className={style.container}>
<div className={style.all} >
    <h1>{title}</h1>
     <div className={style.cards}>
      {data.map((item) => {
        return (
    <NavLink to={`/path/${item.id}`} key={item.id}>
           <div  className={style.card} >
            <img src={item.imgs} alt="" className={style.card_img} />
            <div className={style.card_body}>
              <h1 className={style.card_title}>{item.disc}</h1>
              <p className={style.card_desc}>{item.title}</p>
              <p className={style.card_rate}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <span>{item.reting}</span>
              </p>
            </div>
          </div>
    </NavLink>
        );
      })}
    </div>
   </div>
   </div>
  );
}