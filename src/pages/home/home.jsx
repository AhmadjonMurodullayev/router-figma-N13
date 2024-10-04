import React from 'react'
import { Hero } from '../../components/hero/hero'
import datas from '../../data/data'
import Serviz from '../../components/serviz/serviz'
import { Rykn } from '../../components/rykn/rykn'
import Kitob from '../../components/kitob/kitob'
import Header from '../../layout/header/header'
import Navbar from '../../layout/header/navbar'
import style from './style.module.scss'
import { Footer } from '../../layout/footer/footer'
export default function Home() {
  return (
    <div >
      <Header/>
      <Navbar/>
       <Hero data={datas.hero} /> 
       <Serviz  data={datas.servez}/>
       <Rykn data={datas.rykn}/>
       <Kitob data={datas.kitob } title={"Янги қўшилганлар"} />
       <Kitob data={datas.audio } title={"Аудио китоблар"} />
       <Footer/>
    </div>
  )
}
