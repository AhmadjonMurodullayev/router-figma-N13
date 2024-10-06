import React from "react";
import { Routes, Route } from "react-router-dom";
import Hisob from "../hisob/hisob";
import Kitoblarim from "../kitoblarim/kitoblarim";
import Saqlangan from "../saqlanganlar/saqlanganlar";
import Setting from "../setting/setting";
import Obuna from "../obuna/obuna";

import style from "./style.module.scss";
export default function DashboardProfil() {
  return (
    <div className={style.all}>
      <Routes>
        <Route path="/" index element={<Obuna />} />
        <Route path="hisob" element={<Hisob />} />
        <Route path="kitoblarim" element={<Kitoblarim />} />
        <Route path="saqlangan" element={<Saqlangan />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
}
