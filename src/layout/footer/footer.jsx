import React from 'react'
import play from '../../assets/play.png'
import apps from '../../assets/app.png'
import uz from '../../assets/uz.png'
import hum from '../../assets/hum.png'
import pay from '../../assets/pay.png'
import styles from './style.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.footerTop}>
      <div className={styles.column}>
        <h4>Платформа ҳақида</h4>
        <a href="#">Liber ўзи нима?</a>
        <a href="#">Фойдаланиш шартлари</a>
        <a href="#">Ёрдам</a>
      </div>
      <div className={styles.column}>
        <h4>Обуна ҳақида</h4>
        <a href="#">Обуна бўлиш</a>
        <a href="#">Қандай тўлаш</a>
      </div>
      <div className={styles.column}>
        <h4>Китоблар</h4>
        <a href="#">Аудио китоблар</a>
        <a href="#">Электрон китоблар</a>
        <a href="#">Китоблар</a>
      </div>
      <div className={styles.column}>
        <h4>Мобил иловa</h4>
        <div className={styles.appIcons}>
          <img src={play} alt="Google Play" />
          <img src={apps} alt="App Store" />
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.socialMedia}>
        <span>Ижтимоий тармоқлар</span>
        <div className={styles.icons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className={styles.contact}>
        <span>Боғланиш</span>
        <p>+998 90 253 77 53</p>
        <p>support@liber.uz</p>
      </div>
      <div className={styles.payment}>
        <span>Биз қабул қиламиз</span>
        <div className={styles.paymentIcons}>
          <img src={uz} alt="Uzcard" />
          <img src={hum} alt="Humo" />
          <img src={pay}alt="Payme" />
        </div>
      </div>
    </div>
  </div>
  
  )
}
