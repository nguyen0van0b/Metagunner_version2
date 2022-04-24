import { useEffect,useState } from 'react';
import { useRouter } from "next/router";
import style from './layout.module.scss'
import AOS from "aos";
const imglogo = "/assets/Logo.webp";

function Layout({children}){
        const router = useRouter()
        const [loading, setLoading] = useState(true);
        useEffect(() => {
                AOS.init({duration: 1200,});
                AOS.refresh();
              }, []);
          useEffect(() => { 
                window.addEventListener('load', event => { 
                       setLoading(false)
                })
        }, [loading]);
        return (
                <>
                        {loading ? <div className={style.loadingpage}>
                                <img src={imglogo} alt=""/>
                        </div>:
                <>
                                {children}
                                </>
        }
                </>
        )
}

export default Layout