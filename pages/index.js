import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";
import MeetOurTeam from "../components/meet-our-team";
import HowItWorks from "../components/how-it-works";
import Community from "../components/community";
import Preloader from "../components/preloader";


const Home = (props) => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      ``;
      setIndex(index !== 0 ? index - 1 : 3);
    }
    if (direction === "right") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };
  console.log(index);

  return (
    <>
      <Preloader></Preloader>
      <Navbar></Navbar>
      <div className="home-container">
        <Head>
          <title>BeRies</title>
          <meta property="og:title" content="BeRies" />
        </Head>

        <main id="slider" className="home-slider">
          <div
            className={styles.leftArrowContainer}
            style={{ left: 0 }}
            onClick={() => handleArrow("left")}
          >
            <Image
              src="/assets/arrow.svg"
              className={styles.arrowl}
              width={40}
              height={40}
            />
          </div>

          <div
            className={styles.wrapper}
            style={{ transform: `translateX(${-100 * index}vw)` }}
          >
            <div className={styles.pack1Container}>
              <div className={styles.leftColumn}>
                <img
                  src="/assets/nft-boite-pack-1-1500h.webp"
                  className={styles.packImage}
                ></img>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.rightContainer}>
                  <h1 className={styles.h1Slide}>Mint your pack</h1>
                  <p className={styles.pSlide}>If you want BeRies clothes</p>
                  <a href="/mint-pack-1">
                    <button className={styles.buttonSlide1}>Choose...</button>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.pack2Container}>
              <div className={styles.leftColumn}>
                <img
                  src="/assets/nft-boite-pack-2-1500h.webp"
                  className={styles.packImage}
                ></img>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.rightContainer}>
                  <h1 className={styles.h1Slide}>Mint your pack</h1>
                  <p className={styles.pSlide}>If you want BeRies clothes</p>
                  <a href="/mint-pack-2">
                    <button className={styles.buttonSlide2}>Choose...</button>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.pack3Container}>
              <div className={styles.leftColumn}>
                <img
                  src="/assets/nft-boite-pack-3-1500h.webp"
                  className={styles.packImage}
                ></img>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.rightContainer}>
                  <h1 className={styles.h1Slide}>Mint your pack</h1>
                  <p className={styles.pSlide}>If you want BeRies clothes</p>
                  <a href="/mint-pack-3">
                    <button className={styles.buttonSlide3}>Choose...</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.pack4Container}>
              <div className={styles.leftColumn}>
                <img
                  src="/assets/nft-boite-pack-4-1500h.webp"
                  className={styles.packImage}
                ></img>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.rightContainer}>
                  <h1 className={styles.h1Slide}>Mint your pack</h1>
                  <p className={styles.pSlide}>If you want BeRies clothes</p>
                  <a href="/mint-pack-4">
                    <button className={styles.buttonSlide4}>Choose...</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.rightArrowContainer}
            style={{ right: 0 }}
            onClick={() => handleArrow("right")}
          >
            <Image
              src="/assets/arrow.svg"
              className={styles.arrowr}
              width={40}
              height={40}
            />
          </div>
        </main>
        <HowItWorks rootClassName="HowItWorks"></HowItWorks>

        <Community rootClassName="Community"></Community>

        <MeetOurTeam rootClassName="MeetOurTeam"></MeetOurTeam>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }

//////////// SLIDER

          .home-slider {
            width: 100%;
            height: 550px;
            display: flex;
            overflow: hidden;            
            flex-direction: column;
            justify-content: center;
            background-color: #0000ff;
            padding: 0px;
          }
 
          .leftArrowContainer{
            position: absolute;
            height: 500px;
            width: 50px;
            margin-left: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .rightArrowContainer{
            position: absolute;
            height: 500px;
            width: 40px;
            margin-right: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }


        @media (max-width: 479px) {
          .home-steps {
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-steps-container {
            padding-left: 0px;
          }
          .home-container03 {
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .home-text01 {
            margin-left: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-container06 {
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text05 {
            margin-left: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-container09 {
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .home-text09 {
            margin-left: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
            /////////////////////////////////////

          .home-image04 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image05 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image06 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text20 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .1-icon {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text22 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .2-icon {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .home-text25 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .3-icon {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text26 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          @media (max-width: 767px) {

            .home-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-steps-container {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-step-1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-step-container01 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container03 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text01 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text02 {
              text-align: left;
            }
            .home-step-2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container04 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container06 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text05 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              text-align: left;
            }
            .home-step-3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container07 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container09 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text09 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {

            .home-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-steps-container {
              padding-left: 0px;
            }
            .home-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text01 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text05 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container09 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
