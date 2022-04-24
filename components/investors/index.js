import style from './investors.module.scss'

function Investors(){
    return(
        <section className={style.investors} id='investors'>
            <div className='container'>
                <h2 className='title' data-aos="fade-up">our <span>investors</span></h2>
                <div className={style.investorsWrapper} data-aos="flip-down" data-aos-delay="300">
                  
                </div>
            </div>
        </section>
    )
}
export default Investors