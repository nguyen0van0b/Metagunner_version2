import style from './footer.module.scss'
const imgLogo = '/assets/Logo_Metagunner.webp'
const imgTelegram = '/assets/telegram.svg'
const imgDiscord = '/assets/discord.svg'
const imgTwitter = '/assets/twitter.svg'
const imgGithub = '/assets/githubbbb.svg'
const imgMedium = '/assets/medium.svg'
const imgFacebook = '/assets/facebook.svg'
const imgBottom_menu = '/assets/bottom_menu.webp'

function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footerContainer}>
               
                <div className={style.footerMenu}>
                    <div className={style.footerMenuWrapper}>
                        <h2>ABOUT</h2>
                        <div className={style.footerMenuAbout}>
                            <ul>
                                <li><a href="#features">Fearures</a></li>
                                <li><a href="#NFTsItem">NFT Card</a></li>
                                <li><a href="#character">Soldier</a></li>
                            </ul>
                        </div>
                        <div className={style.footerMenuAbout}>
                            <ul>
                                <li><a href="#roadmap">Roadmap</a></li>
                                <li><a href="#tokenomics">Tokenomics</a></li>
                                <li><a href="#TEAM">Team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.footerMenuFAQ}>
                        <h2>FAQ</h2>
                        <ul>
                            <li><a href="https://whitepaper.metagunner.io/faq/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a></li>
                            <li><a href="https://whitepaper.metagunner.io/" target="_blank" rel="noreferrer">Whitepaper</a></li>
                            <li><a href="mailto:contact@metagunner.io">Contact@metagunner.io</a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.footerWrapper}>
                    <div className={style.footerWrapperLogo}>
                    <img src={imgLogo} alt=""/>
                    <p className={style.copyright}>Copyright © 2021 MetaGunner All rights reserved.</p>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <div className={style.footerBottomSocial}>
                            <a href="https://t.me/MetaGunnerChannel" target="_blank" rel="noopener noreferrer"><img src={imgTelegram} alt=""/></a>
                            <a href="https://discord.gg/3dNjuDMjcB" target="_blank" rel="noopener noreferrer"><img src={imgDiscord} alt=""/></a>
                            <a href="https://twitter.com/MetaGunner_io" target="_blank" rel="noopener noreferrer"><img src={imgTwitter} alt=""/></a>
                            <a href="https://metagunner.medium.com" target="_blank" rel="noopener noreferrer"><img src={imgMedium} alt=""/></a>
                            <a href="https://www.facebook.com/Meta-Gunner-104600948766397" target="_blank" rel="noopener noreferrer"><img src={imgFacebook} alt=""/></a>
                    </div>
                </div>
            </div>
            
    </footer>
    )
}
export default Footer