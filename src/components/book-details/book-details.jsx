import React from "react";
import { Link, useParams } from "react-router-dom";
import datas from "../../data/data";
import style from "./style.module.scss";
import Header from "../../layout/header/header";
import Music from "../../assets/icons/music";
import Book from "../../assets/icons/book";
import Star from "../../assets/icons/star";
import Massag from "../../assets/icons/massag";
import Trak from "../../assets/icons/trak";
import { Footer } from "../../layout/footer/footer";
export default function BookDetails() {
  const { id } = useParams();
  const book = datas.kitob.find((item) => item.id === parseInt(id));
  const audio = datas.audio.find((item) => item.id === parseInt(id));
  let item = book ? book : audio ? audio : <h2>Kitob topilmadi</h2>;

  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.hero}>
          <div className={style.all}>
            <div className={style.card}>
              <img src={item.imgs} alt="" className={style.card_img} />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_item}>
              <div className={style.links}>
                <h1>Элжернга аталган гуллар</h1>
                <Link className={style.link}>SIYOSAT, FANTASTIKA</Link>
              </div>
              <div className={style.items}>
                <div>
                  <Music />
                  <Book />
                </div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <h2>4.1</h2>
                <Massag />
                <p> 235 Фикрлар</p>
              </div>
            </div>
            <div>
              <p className={style.h3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                odit iure vel, veritatis inventore, similique deleniti ea natus
                laborum ab assumenda. At reiciendis inventore sit adipisci odit
                itaque quas optio aliquam doloribus, porro quos sunt dolorem et
                culpa qui quasi vitae deserunt eligendi. Totam, iusto a itaque
                ipsam ex veritatis!
              </p>
              <br />
              <p className={style.h3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quaerat temporibus magnam aliquid veritatis deleniti doloribus?
                Obcaecati, dolor quis dicta fugiat debitis adipisci aperiam? Hic
                nihil distinctio officia in voluptates.
              </p>
            </div>
            <div className={style.titles}>
              <div className={style.link_itemss}>
                <p>Муаллиф</p>
                <h3>Kevin Smiley</h3>
              </div>
              <div className={style.link_itemss}>
                <p>Нашриёт</p>
                <h3>Wepress Inc.</h3>
              </div>
              <div className={style.link_itemss}>
                <p>Йил</p>
                <h3>1999</h3>
              </div>
            </div>
            <div className={style.btns}>
              <button className={style.btn}>
                <Trak />
                Сотиб олиш - 65 000 сум
              </button>
              <button className={style.btn2}>
                <Music />
                Аудио тинглаш - 55 000 сум
              </button>
              <button className={style.btn3}>
                <Book />
                Онлайн укиш - 45 000 сум
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={style.maulumot_box}>
          <div className={style.box_ma}>
            <div className={style.malumot}>
              <div className={style.malumot_logo}>
                <h1>Маълумотлар</h1>
                <h1>Фикрлар</h1>
              </div>

              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Китоб номи</h3>
                <h5 className={style.malumot_h5}>Элжернга аталган гуллар</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Муаллиф</h3>
                <h5 className={style.malumot_h5}>Даниел КИЗ</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>ISBN</h3>
                <h5 className={style.malumot_h5}>
                  121341381648 (ISBN13: 121341381648)
                </h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Тил</h3>
                <h5 className={style.malumot_h5}>Ўзбек</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Сахифалар</h3>
                <h5 className={style.malumot_h5}>450</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Чоп этилган сана</h3>
                <h5 className={style.malumot_h5}>Апрель 7, 1999</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Нашриёт</h3>
                <h5 className={style.malumot_h5}>Wepress Inc.</h5>
              </div>
              <div className={style.maulumot_titels}>
                <h3 className={style.malumot_h3}>Рукн</h3>
                <Link>SIYOSAT</Link>
              </div>
            </div>
            <div className={style.uxshash}>
              <h1>Ўхшаш китоблар</h1>
              <div className={style.bookList}>
                {datas.kitob.map((item, index) => (
                  <div className={style.bookItem} key={index}>
                    <img
                      src={item.imgs}
                      alt={item.title}
                      className={style.bookImage}
                    />
                    <div className={style.bookDetails}>
                      <h3 className={style.bookTitle}>{item.title}</h3>
                      <p className={style.bookDescription}>{item.disc}</p>
                      <img
                        src={item.img}
                        alt="Rating"
                        className={style.ratingImage}
                      />
                      <h4 className={style.bookRating}>{item.reting}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


<Footer/>

    </div>
  );
}
