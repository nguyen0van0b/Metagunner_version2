import style from './basecamp.module.scss'
import clsx from 'clsx';
import React from "react";
const urlVideo = '/assets/basecamp_Metagunner_MTG.mp4'
// const BgVideo = "/assets/Background_Video.webp";
const urlimg = '/assets/TEXT_BaseCamp.png'
const urlimgmb = '/assets/BASECAMP_BACKGROUND_MB.png'
// const urlimgbasecamp = '/assets/img_BaseCamp.webp'
// const urlDotOrange = "/assets/dot_orange.webp";

function Basecamp(){
    return(
        <section className={style.basecamp} id='basecamp'>
            <video src={urlVideo} autoPlay='autoplay' muted='muted' loop='loop' id='Video_Basecamp'/>
                <div className={style.basecampTitle}>
                    <h2>BASECAMP</h2>
                </div>
                <img src={urlimg} alt="" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000"/>
        </section>
    )
}
export default Basecamp