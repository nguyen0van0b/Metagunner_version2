// import urlImg1 from '../../media/game_gallery_02.94e6dc69.webp'
import style from './roadmap.module.scss'
import Slider from "react-slick";
import clsx from 'clsx'
const urlTitle = '/assets/Roadmap_Metagunner.webp'
const urlRobot1 = '/assets/robot_2.webp'
const urlItem1 = '/assets/Q1.webp'
const urlItem2 = '/assets/Q2.webp'
const urlItem3 = '/assets/Q3.webp'
const urlItem4 = '/assets/Q4.webp'
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
    ]
  };
function Roadmap(){
    
    return(
        <section className={style.roadmap} id='roadmap' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
            <div className={clsx('container',style.roadmapContainer)}>
                <div className={style.roadmapTitle}>
                    <h2>ROADMAP</h2>
                </div>
            </div>
            <img src={urlRobot1} className={style.roadmapRobot1} alt=""/>
            <Slider className={style.RoadmapItems} {...settings}>
                <img src={urlItem1} alt="" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"/>
                <img src={urlItem2} alt="" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000"/>
                <img src={urlItem3} alt="" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000"/>
                <img src={urlItem4} alt="" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1000"/>
            </Slider>
            <img src={urlRobot1} className={style.roadmapRobot2} alt=""/>
    </section>
    )
}
export default Roadmap