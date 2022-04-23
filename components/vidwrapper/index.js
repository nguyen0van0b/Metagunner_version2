import { useEffect } from 'react'
import style from './vidwrapper.module.scss'
const urlLogo = '/assets/Logo.webp'
const urlimg1 = '/assets/BACKGROUND.png'
const urlimg4 = '/assets/Soldiers_banner.png'
const urlSLOGAN = '/assets/SLOGAN.png'
const urlVideo = '/assets/background_PC_MTG.mp4'


function Vidwrapper(){
    useEffect(() => {
        let div = document.getElementById("playnow");
        div.onmouseover = function () {
          div.innerHTML = "Coming Soon";
        };
        div.onmouseout = function () {
          div.innerHTML = "Play Now";
        };
      });
    return(
        <section className={style.Vidwrapper} id='vidwrapper'>
            <div className={style.banner_PC}>
                <img src={urlimg1} className={style.image1} data-value="5"  alt="" />
                <video src={urlVideo} className={style.VideoBackground} autoPlay='autoplay' muted='muted' loop='loop' ></video>
                <img src={urlimg4} className={style.image3} alt="" />
                <img src={urlLogo} className={style.image2} alt="" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1000"/>
                <div className={style.WrapperContainer} data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1000">
                    <img src={urlSLOGAN} className={style.imageSl} data-value="5"  alt="" />
                    <p>A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
                    <a href="https://docsend.com/view/6uxnyvc62bd6pya6" target='_blank'  rel="noreferrer"><button className={style.btnPD}>Pitch Deck</button></a>
                    <button className={style.btnPN}  id="playnow">Play now</button>
                </div>
            </div>
        </section>
    )
}
export default Vidwrapper