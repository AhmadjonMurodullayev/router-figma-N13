import React from 'react'
import style  from './style.module.scss'
import user from '../../../assets/users.png'
export default function Setting() {
  return (
    <div className={style.all}>
      <h1 className={style.h1}>Созламалар</h1>
      <div className={style.box}>
   <div className={style.imgs}>
    <img src={user} alt="" />
   </div>
   <h4 className={style.h4}>Сурат юклаш</h4>
      </div>
      <div className={style.sorchs}>
        <h4 className={style.h42}>Исмингиз</h4>
        <input className={style.sorch_input} type="text" placeholder='Исмингиз' />
      </div>
      <button className={style.btnss}>Сақлаш</button>
    </div>
  )
}
