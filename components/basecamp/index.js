import style from './basecamp.module.scss'
import clsx from 'clsx';
import React from "react";
const urlVideo = '/assets/basecamp_Metagunner.mp4'
// const BgVideo = "/assets/Background_Video.webp";
const urlimg = '/assets/TEXT_BaseCamp.png'
// const urlimgmb = '/assets/basecamp-mb_Metagunner.webp'
// const urlimgbasecamp = '/assets/img_BaseCamp.webp'
// const urlDotOrange = "/assets/dot_orange.webp";

function Basecamp(){
    return(
        <section className={style.basecamp} id='basecamp'>
            <video src={urlVideo} autoPlay='autoplay' muted='muted' loop='loop' id='Video_Basecamp'/>
                <div className={style.basecampTitle}>
                    <h2>BASECAMP</h2>
                </div>
                <img src={urlimg} alt=""/>
        </section>
    )
}
export default Basecamp