import React from 'react'
import style from './style.module.scss'
export const Rykn = ({data}) => {
  return (
    <div className={style.container}>
        <h1>Рукнлар</h1>
     <div  className={style.box}>
        {
    data.map(index =>{
        return <div key={index.id}>
            <img src={index.img} alt="" />
        </div>
    })
        }
     </div>
    </div>
  )
}
