import { useEffect } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const BgVideo = "/assets/Background_Video.webp";
const urlimgAblout = "/assets/img_Ablout.webp";
const urlimgrobot = "/assets/metagunner_1.png";
const urlSLOGAN = '/assets/SLOGAN.png'

function About() {
  return (
    <section className={style.about} id="about">
        <div className={style.WrapperContainer}>
            <img src={urlSLOGAN} className={style.imageSl} data-value="5"  alt="" />
            <p>A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
            <button type="" className={style.btnPD}>Pitch Deck</button>
            <button type="" className={style.btnPN}>Play now</button>
        </div>
          <img src={urlimgrobot} className={style.aboutBGimg} alt=""/>
      <div className={clsx("container", style.container)}>
        <div className={style.WrapperVideo}>
            <img src={BgVideo} alt="" />
            <img src={urlimgAblout} className={style.WrapperVideoimgmb} alt=""/>
            <iframe src="https://www.youtube.com/embed/qBndLRj_0Nc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
    </section>
  );
}
export default About;