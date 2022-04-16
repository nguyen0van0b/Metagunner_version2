import Header from "../components/header";
import Vidwrapper from "../components/vidwrapper";
import About from "../components/about";
import Features from "../components/features";
import NFTsItem from "../components/NFTsItem";
import Character from "../components/character";
import Basecamp from "../components/basecamp";
import Roadmap from "../components/roadmap";
import Tokenomics from "../components/tokenomics";
import TEAM from "../components/TEAM";
import Partners from "../components/partners";
import Technology from "../components/Technology";
import Event from "../components/Event";

// import {
//   Vidwrapper,
//   About,
//   Features,
//   Character,
//   CharacterMB,
//   Basecamp,
//   Roadmap,
//   Tokenomics,
//   Communities,
//   Partners,
//   Investors,
//   TEAM,
//   NFTsItem,
// } from "./Content";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { useEffect, useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.onpaint =  handleResize();
  });
  return (
    <Layout>
      <Header />
      {/* <Event/> */}
      <Vidwrapper />
      <About />
      <Features />
      <NFTsItem />
      <Character /> 
      <Basecamp />
      <Roadmap />
      <Tokenomics />
      <TEAM />
      <Technology />
      <Footer />
    </Layout>
  );
}

export default Home;
