const logo1 = '/assets/chainlink.webp'
const title = '/assets/TECH.webp'
const binance = '/assets/binance-smart-chain.webp'
const Unity = '/assets/Unity_Technologies.webp'
const imgBG_footer = '/assets/BG_footer.webp'
import style from './Technology.module.scss'

function Technology(){
    return(
    <section className={style.technologys} id='partners'>
        {/* <img src={imgBG_footer} alt=""/> */}
        <div className={style.technologysWrapperBG} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="2000" data-aos-duration="2000">
        <div className={style.container} >
            <div className={style.technologystitle}>
                        {/* <img src={title} alt=""/> */}
                        <h2>TECHNOLOGY INTEGRATION</h2>
            </div>
                <div className={style.technologysWrapper}>
                    <img src={logo1} alt=""/>
                    <img src={binance} alt=""/>
                    <img className={style.technologysUnity} src={Unity} alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Technology