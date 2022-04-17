import { useEffect } from 'react'
import style from './vidwrapper.module.scss'
const urlLogo = '/assets/Logo.webp'
const urlimg1 = '/assets/BACKGROUND.png'
const urlimg4 = '/assets/Soldiers_banner.png'
const urlSLOGAN = '/assets/SLOGAN.png'
const urlimg2 = '/assets/SKY-MOBILE.webp'
const urlimg8 = '/assets/SOLDIERS_AND_2_MAPS.webp'
const urlimg5= '/assets/SOLDIERS_500.webp'

function Vidwrapper(){
    return(
        <section className={style.Vidwrapper} id='vidwrapper'>
            <div className={style.banner_PC}>
                <img src={urlimg1} className={style.image1} data-value="5"  alt="" />
                <img src={urlimg4} className={style.image3} data-value="5"  alt=""/>
                <div className={style.WrapperContainer}>
                    <img src={urlLogo} className={style.image2} alt="" data-aos="flip-down" data-aos-delay="100" data-aos-duration="100"/>
                    <img src={urlSLOGAN} className={style.imageSl} data-value="5"  alt="" />
                    <p>A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
                    <button type="" className={style.btnPD}>Pitch Deck</button>
                    <button type="" className={style.btnPN}>Play now</button>
                </div>
            </div>
            <div className={style.banner_MB}>
                <img src={urlimg2} className={style.image1} data-value="5" alt="" />
                <img src={urlLogo} className={style.image2} alt="" data-aos="flip-down" data-aos-delay="100" data-aos-duration="100"/>
                <img src={urlimg8} className={style.image3} data-value="5" alt=""/>
            </div>
        </section>
    )
}
export default Vidwrapper