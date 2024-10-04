import React from 'react'
import style from './style.module.scss'
export default function Serviz({data}) {
  return (
    <div className={style.container}>
        <div className={style.box}>
        {
            data.map(item =>{
                return <div key={item.id} className={style.boxitem} >
                 
               <div className={style.img}>
                    <img src={item.img} alt="" />
                 </div>
                 <div className={style.titles}>
                    <h4>{item.disc}</h4>
                    <p>{item.title}</p>
                 </div>
                </div>
            })
        }
        </div>

    </div>
  )
}
