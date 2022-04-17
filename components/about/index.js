import { useEffect } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const BgVideo = "/assets/Background_Video.webp";
const urlimgAblout = "/assets/img_Ablout.webp";
const urlimgrobot = "/assets/metagunner_1.png";

function About() {
  return (
    <section className={style.about} id="about">
        <div className={style.aboutBG}>
          <img src={urlimgrobot} className={style.aboutBGimg} alt=""/>
        </div>
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