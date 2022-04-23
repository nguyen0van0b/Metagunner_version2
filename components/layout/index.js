import { useEffect,useState } from 'react';
import { useRouter } from "next/router";
import AOS from "aos";

function Layout({children}){
        const router = useRouter()
        const [loading, setLoading] = useState(false);
        useEffect(() => {
                AOS.init({duration: 1200,});
                AOS.refresh();
              }, []);
          useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
                console.log(router);
            router.events.on("routeChangeStart", (url) => {
               console.log("url" + url);
               setLoading(true)
            });
            router.events.on("routeChangeComplete", (url) => {
               console.log("Route is changed");
               setLoading(false)
            });
        }, []);
        return (
                <>
                        {loading && <div style={{background:'black',width:'100vw',height:'100vh'}}></div>}
                                {children}
                </>
        )
}

export default Layout