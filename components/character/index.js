import clsx from "clsx";
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./character.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const urlDestroyer_Icon = "/assets/Destroyer_Icon_Metagunner.webp";
// const urlSpecial_Force_Icon = "/assets/Special_Force_Icon_Metagunner.webp";
// const urlGunner_Icon = "/assets/Gunner_Icon_Metagunner.webp";
// const urlOfficer_Icon = "/assets/Officer_Icon_Metagunner.webp";
// const urlScout_Icon = "/assets/Scout_Icon_Metagunner.webp";
// const urlSniper_Icon = "/assets/Sniper_Icon_Metagunner.webp";
// const urlMedic_Icon = "/assets/Medic_Icon_Metagunner.webp";

const urlDestroyer_Icon = "/assets/Destroyer_Icon_Metagunner.png";
const urlSpecial_Force_Icon = "/assets/Special_Force_Icon_Metagunner.png";
const urlGunner_Icon = "/assets/Gunner_Icon_Metagunner.png";
const urlOfficer_Icon = "/assets/Officer_Icon_Metagunner.png";
const urlScout_Icon = "/assets/Scout_Icon_Metagunner.png";
const urlSniper_Icon = "/assets/Sniper_Icon_Metagunner.png";
const urlMedic_Icon = "/assets/Medic_Icon_Metagunner.png";


const urlSoldier_Tab = "/assets/Soldier_Tab.png";
const urlDESTROYER = "/assets/SOLDIERS_DESTROYER.png";
const urlSPECIALFORCE = "/assets/SOLDIERS_SPECIAL_FORCE.png";
const urlGUNNER = "/assets/SOLDIERS_GUNNER.png";
const urlOFFICER = "/assets/SOLDIERS_OFFICER.png";
const urlSCOUT = "/assets/SOLDIERS_SCOUT.png";
const urlSNIPER = "/assets/SOLDIERS_SNIPER.png";
const urlMEDIC = "/assets/SOLDIERS_MEDIC.png";
const urlDotOrange = "/assets/dot_orange.webp";
const urlRectangle = "/assets/Rectangle_Soldier.webp";


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
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
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
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section className={style.character} id="character">
        <div className={clsx("container", style.characterContainer)}>
          <div className={style.charactertitle}>
            <h1>SOLDIER</h1>
            {/* <p>
              The 15 characters of MetaGunner are divided into seven types of
              soldiers
            </p> */}
            {/* <img src={urlDotOrange} alt=""/> */}
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
              <img src={urlDESTROYER} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlSPECIALFORCE} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlGUNNER} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlOFFICER} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlSCOUT} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlSNIPER} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
          <div className={style.characterSecondSlider}>
              <img src={urlMEDIC} className={style.SoldierWrapper}></img>
              <img src={urlSoldier_Tab} className={style.SoldierBottom}></img>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
          variableWidth= {true}
          className={style.characterFirstSlider}
          {...settings2}
        >
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlDestroyer_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlSpecial_Force_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlGunner_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlOfficer_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlScout_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlSniper_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlMedic_Icon} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}
