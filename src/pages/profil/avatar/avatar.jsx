import React from 'react'
import style from './style.module.scss'
export default function Avatar() {
  const img = 'https://s3-alpha-sig.figma.com/img/cbc2/fe78/e54f07c106f5f98d804461eb28cc135f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epsmLMuzRpnYmt0J2GiA5MgoCXxq2NcGhm7YfeW61iox64ZZUjdIIS6-bmjPTG-ML6WLEXLXw3NrGhPFLZlO6Th~wuYAvrfNe8ALxGFbmPwBj5UOOzjYfZUmL-A5Tu1mErE0ePfF5Gy9Reuc5YASdoxwVLqWbgOk-HMCM3M79QMmOMVSvH1EfYhGmBWrvN-Lz5Tg~HWRYvUB4DrQuCbrok-VLdv5d~Mn-3iuzEkLipZz~WcxtIG~4ajmlSlQHq2GDMtOOhYhEgF27I6AfYAAM1rYJ~-LAppPiIxAInJDhW41R~cJjFDImPfwzG9yaq8386KY2G-4KWnpkD63YfY84Q__'
  return (
    <div className={style.avatar}>
      <div className={style.img}>
        <img src={img} alt="img" />
      </div>
      <div className={style.body}>
        <h1>Суғдиёна Икромова</h1>
        <h3>+998 90 253 77 53</h3>
        <p>ID: 0001  Баланс: 45 000 сўм</p>
      </div>
    </div>
  )
}
