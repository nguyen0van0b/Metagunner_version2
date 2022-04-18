import clsx from 'clsx'
import style from './tokenomics.module.scss'
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



function Tokenomics(){
    return(
        <div className={style.wrapper}>
        <div className={style.tokenomicsLine}>
                <img src={urlLINE} alt="" className={style.tokenomicsLINE1}/>
                <img src={urlLINE} alt="" className={style.tokenomicsLINE2}/>
        </div>
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



