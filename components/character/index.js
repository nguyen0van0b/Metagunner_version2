import clsx from "clsx";
import React, { Component,useEffect,useRef } from "react";
import Slider from "react-slick";
import style from "./character.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import react from "react";

const urlDestroyer_Icon = "/assets/Destroyer_Icon_Metagunner.webp";
const urlSpecial_Force_Icon = "/assets/Special_Force_Icon_Metagunner.webp";
const urlGunner_Icon = "/assets/Gunner_Icon_Metagunner.webp";
const urlOfficer_Icon = "/assets/Officer_Icon_Metagunner.webp";
const urlScout_Icon = "/assets/Scout_Icon_Metagunner.webp";
const urlSniper_Icon = "/assets/Sniper_Icon_Metagunner.webp";
const urlMedic_Icon = "/assets/Medic_Icon_Metagunner.webp";

const urlDestroyer_BG = "/assets/BG_Destroyer.webp";
const urlSpecial_Force_BG = "/assets/BG_Special_Force.webp";
const urlGunner_BG = "/assets/BG_gunner.webp";
const urlOfficer_BG = "/assets/BG_officer.webp";
const urlScout_BG = "/assets/BG_scout.webp";
const urlSniper_BG = "/assets/BG_Sniper.webp";
const urlMedic_BG = "/assets/BG_medic.webp";



const urlDESTROYER = "/assets/SOLDIERS_DESTROYER.webp";
const urlSPECIALFORCE = "/assets/SOLDIERS_SPECIAL_FORCE.webp";
const urlGUNNER = "/assets/SOLDIERS_GUNNER.webp";
const urlOFFICER = "/assets/SOLDIERS_OFFICER.webp";
const urlSCOUT = "/assets/SOLDIERS_SCOUT.webp";
const urlSNIPER = "/assets/SOLDIERS_SNIPER.webp";
const urlMEDIC = "/assets/SOLDIERS_MEDIC.webp";

const urlSoldier_Tab = "/assets/Soldier_Tab_MB.webp";

const urlDESTROYER_MB = "/assets/SOLDIERS_DESTROYER_MB.webp";
const urlSPECIALFORCE_MB = "/assets/SOLDIERS_SPECIAL_FORCE_MB.webp";
const urlGUNNER_MB = "/assets/SOLDIERS_GUNNER_MB.webp";
const urlOFFICER_MB = "/assets/SOLDIERS_OFFICER_MB.webp";
const urlSCOUT_MB = "/assets/SOLDIERS_SCOUT_MB.webp";
const urlSNIPER_MB = "/assets/SOLDIERS_SNIPER_MB.webp";
const urlMEDIC_MB = "/assets/SOLDIERS_MEDIC_MB.webp";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display:'none',
        position: "absolute",
        top: "50%",
        right: 0,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display:'none',
        position: "absolute",
        top: "50%",
        left: 0,
        zIndex: 1,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      width: 'calc(100% / 7)',
    };
  }
  
  handleResize = () => {
    if(window.innerWidth < 700)
      this.setState({
        width: 'calc(100% / 4)',
      })
    else{
      this.setState({
        width: 'calc(100% / 7)',
      })
    }
  };


  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  render() {
    const settings1 = {
      infinite: true,
      fade: true,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
    };
    const settings2 = {
      slidesToShow: 7,
      infinite:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    
    return (
    <>
      <section className={style.character} id="character">
        <div className={clsx("container", style.characterContainer)}>
          <div className={style.charactertitle}>
            <h1>SOLDIER</h1>
          </div>
        </div>
        {/* <div className={style.characterBG}>
        </div> */}
        {/* <img src={urlRectangle} alt="" className={style.characterBG}/> */}
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className={style.characterSecondSliderWrapper}
          {...settings1}
        >
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlDESTROYER} className={style.SoldierWrapper}></img>
                  <img src={urlDestroyer_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlDESTROYER_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlSPECIALFORCE} className={style.SoldierWrapper}></img>
                  <img src={urlSpecial_Force_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlSPECIALFORCE_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlGUNNER} className={style.SoldierWrapper}></img>
                  <img src={urlGunner_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlGUNNER_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlOFFICER} className={style.SoldierWrapper}></img>
                  <img src={urlOfficer_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlOFFICER_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlSCOUT} className={style.SoldierWrapper}></img>
                  <img src={urlScout_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlSCOUT_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlSNIPER} className={style.SoldierWrapper}></img>
                  <img src={urlSniper_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlSNIPER_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
          <div className={style.characterSecondSlider}>
              <div className={style.characterSecondSliderPC}>
                  <img src={urlMEDIC} className={style.SoldierWrapper}></img>
                  <img src={urlMedic_BG} className={style.SoldierBottom}></img>
              </div>
              <div className={style.characterSecondSliderMB}>
                  <img src={urlMEDIC_MB} className={style.SoldierWrapper}></img>
                  <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
              </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
          variableWidth= {true}
          className={clsx(style.characterFirstSlider,'IconSlider')}
          {...settings2}
        >
          {/* width: ( window.innerWidth> 601?'calc(100% / 7)': 'calc(100% / 4)') */}
          <div style={{ width: this.state.width  }}>
                <img src={urlDestroyer_Icon} alt="" className={style.Icon_Des}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlSpecial_Force_Icon} alt=""  className={style.Icon_Spe}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlGunner_Icon} alt=""  className={style.Icon_Gun}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlOfficer_Icon} alt=""  className={style.Icon_Off}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlScout_Icon} alt=""  className={style.Icon_Sco}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlSniper_Icon} alt=""  className={style.Icon_Sni}/>
          </div>
          <div style={{ width: this.state.width }}>
                <img src={urlMedic_Icon} alt=""  className={style.Icon_Med}/>
          </div>
        </Slider>
      </section>
    </>    
    );
  }
}
