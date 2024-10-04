import React from 'react'
import style from "./style.module.scss";
export default function Navbar() {
  return (
  <div className={style.container}>
      <div className={style.navlik}>
    <h2>Аудиокитоб</h2>
    <h2>Электрон китоблар</h2>
    <h2>Босма китоблар</h2>
    <h2>Контакт</h2>
    <h2>Биз хақимизда</h2>
    </div>
  </div>
  )
}
