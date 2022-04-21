import { useEffect,useState } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const BgVideo = "/assets/Background_Video_MTG.webp";
const urlimgAblout = "/assets/img_Ablout.webp";
const urlimgrobot = "/assets/metagunner_1.png";
const urlSLOGAN = '/assets/SLOGAN.png'
const urlRBLtrailer = '/assets/robot_trailer.png'

function About() {
  const [positionX,setPositionX] = useState(0)
  const [positionY,setPositionY] = useState(0)
  const [displayRB,setDisplayRB] = useState('block')
  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY < 1310 && window.scrollY > 410 ){
        if (window.innerWidth > 1720){
          setPositionX(((window.scrollY - 1300)/5))
          setPositionY((window.scrollY - 1300))
          setDisplayRB('block')
        }else
        setDisplayRB('none')
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    //cleanup func
    // return () => window.removeEventListener("scroll", handleScroll);
  }, [positionX]);

  return (
    <section className={style.about} id="about" >
        <div className={style.WrapperContainer}>
            <img src={urlSLOGAN} className={style.imageSl} data-value="5"  alt="" />
            <p>A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
            <button type="" className={style.btnPD}>Pitch Deck</button>
            <button type="" className={style.btnPN}>Play now</button>
        </div>
          <img src={urlimgrobot} className={style.aboutBGimg} />
      <div className={clsx("container", style.container)}>
        <img src={urlRBLtrailer} alt="" style={{transform: `translate(`+positionX+`px,`+positionY+'px)', display:displayRB}} className={style.robotLtraile}/>
        <div className={style.WrapperVideo}>
            <img src={BgVideo} alt="" />
            <img src={urlimgAblout} className={style.WrapperVideoimgmb} alt=""/>
            {/* <iframe src="https://www.youtube.com/embed/qBndLRj_0Nc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <iframe src="https://www.youtube.com/embed/I4jJfI-rbqQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        <img src={urlRBLtrailer} alt="" style={{transform: `translate(`+positionX*-1+`px,`+positionY+'px) scaleX(-1)', display:displayRB}} className={style.robotRtraile}/>
      </div>
    </section>
  );
}
export default About;