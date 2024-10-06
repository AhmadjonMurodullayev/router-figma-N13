import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../layout/header/header";
import Avatar from "./avatar/avatar";
import style from "./style.module.scss";
import DashboardProfil from "./dashboard/dashboard";
import { Footer } from "../../layout/footer/footer";
import Hisob from "../../assets/icons/hisob";
import Shop from "../../assets/icons/shop";
import Save from "../../assets/icons/save";
import Books from "../../assets/icons/books";
import Setting from "../../assets/icons/setting";

export default function Profil() {
  return (
<div>
<div className={style.profil}>
      <Header />
      <Avatar />
      <div className={style.flex}>
        <nav className={style.navbar}>
          <div>
            <NavLink to="/profil/" className={style.navliks}>
              <Shop /> Обуна бўлиш
            </NavLink>
          </div>

          <div>
            <NavLink to="/profil/hisob" className={style.navliks}>
              <Hisob /> Э-Хисоб
            </NavLink>
          </div>
          <div>
            <NavLink to="/profil/kitoblarim" className={style.navliks}>
              <Books /> Китобларим
            </NavLink>
          </div>
          <div>
            <NavLink to="/profil/saqlangan" className={style.navliks}>
              <Save /> Сақланганлар
            </NavLink>
          </div>

          <div>
            <NavLink to="/profil/setting" className={style.navliks}>
              <Setting /> Созламалар
            </NavLink>
          </div>
        </nav>
        <div className={style.box}>
          <DashboardProfil />
        </div>
      </div>
      <br />
      {/* <Footer /> */}
    </div>
</div>
  );
}
