import clsx from 'clsx'
import style from './tokenomics.module.scss'
import Slider from "react-slick";
// const urlImg = '/assets/tokenomics.25d3c6dd_Metagunner.webp'
// const urlTitle = '/assets/Tokenomics_Metagunner.webp'
const urlLINE = '/assets/MONSTER_LINE.png'
const urlLINEKOG = '/assets/META_KOG_LINE.png'
const urlPIE_CHART = '/assets/pie_chart.png'
const urlTEXTMB = '/assets/BOARD_tokenomics.png'
const urlbot5 = '/assets/bot_robot_5.webp'
const urlbot6 = '/assets/bot_robot_6.webp'

// import style from './TEAM.module.scss'
const urlImgAndy_Ly = '/assets/Andy_Ly_Metagunner.webp'
const urlImgHO = '/assets/HO-ANH_Metagunner.webp'
const urlImgDUONG = '/assets/DUONG_Metagunner.webp'
const urlImgTAN = '/assets/TAN_Metagunner.webp'
const urlImgSON = '/assets/SON_Metagunner.webp'
const urlImgAN = '/assets/AN_Metagunner.webp'
const urlImgTHIEN = '/assets/THIEN_Metagunner.webp'
const urlImgSteven = '/assets/Steven_Metagunner.webp'
const urlImgMINH = '/assets/MINH_Metagunner.webp'
const urlImgMee_Ahn = '/assets/Mee-Ahn_Metagunner.webp'
const urlTitle = '/assets/Team_Metagunner.webp'

const url1 = '/assets/1.png'
const url2 = '/assets/2.png'
const url3 = '/assets/3.png'
const url4 = '/assets/4.png'
const url5 = '/assets/5.png'
const url6 = '/assets/6.png'
const url7 = '/assets/7.png'
const url8 = '/assets/8.png'
const url9 = '/assets/9.png'
const url10 = '/assets/10.png'
const url11 = '/assets/11.png'
const url12 = '/assets/12.png'

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    // slidesToScroll: 1,
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

function Tokenomics(){
    return(
        <div className={style.wrapper}>
        <Slider className={style.tokenomicsLine} {...settings}>
               <img src={url1} alt="" className={style.tokenomicsLine1} />
               <img src={url2} alt="" className={style.tokenomicsLine2}/>
               <img src={url3} alt="" className={style.tokenomicsLine3}/>
               <img src={url4} alt="" className={style.tokenomicsLine4}/>
               <img src={url5} alt="" className={style.tokenomicsLine5}/>
               <img src={url6} alt="" className={style.tokenomicsLine6}/>
               <img src={url7} alt="" className={style.tokenomicsLine7}/>
               <img src={url8} alt="" className={style.tokenomicsLine8}/>
               <img src={url9} alt="" className={style.tokenomicsLine9}/>
               <img src={url10} alt="" className={style.tokenomicsLine10}/>
               <img src={url11} alt="" className={style.tokenomicsLine11}/>
               <img src={url12} alt="" className={style.tokenomicsLine12}/>
        </Slider>
    <div className={style.tokenomics_TEAM}>
        
        <section className={style.tokenomics} id='tokenomics'>
            <h2>TOKENOMICS</h2>
            {/* <img src={urlbot6} alt="" className={style.bot6}/> */}
            <h3 className={style.tokenomicsTotal}>Total supply: <span>1,000,000,000 MTG</span></h3>

            <div className={style.tokenomicsWrapper}>
                <div className={style.tokenomicsPieChart}>
                    <img src={urlPIE_CHART} data-aos="flip-left" data-aos-delay="400"></img>
                </div>
                <div className={style.tokenomicsText}>
                    <img src={urlTEXTMB} data-aos="flip-right" data-aos-delay="400" className={style.TextMB}></img>
                </div>
            </div>
            {/* <img src={urlbot5} alt="" className={style.bot5}/> */}
        </section>
        <section className={style.Advisors} id='TEAM'>
        <div className="container">
            <div className={style.AdvisorsTitle}>
                {/* <img src={urlTitle} alt=""/> */}
                <h2>TEAM</h2>
            </div>
        </div>
            <div className={clsx(style.AdvisorsWrapperBottom,style.AdvisorsWrapperTop)}>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgDUONG} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                            <h3>Duong Vu</h3>
                        </div>
                        <p>Chief Technology Officer/ Game Designer</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgAndy_Ly} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                            <h3>Andy Ly</h3>
                        </div>
                        <p>Founder/Chief Executive Officer</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgSON} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                            <h3>Son Dang</h3>
                        </div>
                        <p>Chief Marketing Officer</p>
                    </div>
                </div>
            </div>
            <div className={style.AdvisorsWrapperBottom}>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgAN} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                    <div className={style.name}>
                            <h3>An Ngo</h3>
                        </div>
                        <p>Project Leader</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgSteven} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                            <h3>Steven Lee</h3>
                        </div>
                        <p>Full-stack Developer</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgTHIEN} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                    <div className={style.name} href="">
                            <h3>Thien Nguyen</h3>
                        </div>
                        <p>Marketing Executive</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgMINH} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name}>
                            <h3>Minh Le</h3>
                        </div>
                        <p>Communications Leader</p>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-delay="1000">
                    <div className={style.AdvisorsWrapperBottomItemTop}>
                        <img src={urlImgMee_Ahn} alt=""/>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name}>
                            <h3>Mee-Ahn Nguyen</h3>
                        </div>
                        <p>Lead Designer</p>
                    </div>
                </div>
            </div>
    </section>
    </div>
    <div className={style.tokenomicsLine}>
                <img src={urlLINEKOG} alt="" className={style.tokenomicsLINE1}/>
                <img src={urlLINEKOG} alt="" className={style.tokenomicsLINE2}/>
        </div>
    </div>
    )
}
export default Tokenomics



