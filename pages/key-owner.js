import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const KeyOwner = (props) => {
  return (
    <>
      <Navbar></Navbar>

      <div className="key-owner-container">
        <Head>
          <title>Key-Owner - BeRies</title>
          <meta property="og:title" content="Key-Owner - BeRies" />
          <meta />
        </Head>
        <section className="key-owner-title-section">
          <h1 id="blue"className="h1">BeRies key owner</h1>
          <p className="paragraph">
          If you have the BeRies key, this page is for you. If you want to get it, try by following this link.
          </p>
          <p id="medium" className="paragraph">
          Before the release of Drop 1, there will be the release of a unique NFT, giving access to a large number of advantages that only the holder of this NFT will have. If you really believe in BeRies and its team, that you think the project is solid and that the team is determined to carry it out, then this NFT will clearly allow you to join the team, having access to the backstage of the construction.
          </p>
          <p id="lightitalic" className="paragraph">
          For now, there are no plans for such NFTs in the future.
          </p>
        </section>

        <main id="claim your nft" className="key-owner-claim-your-nft">
          <div className="key-owner-container1">
            <img
              src="/assets/key-600w.png"
              className="key-owner-image"
            />
          </div>
          <div className="key-owner-container2">
            <h1 id="white"className="h2">Claim your NFT</h1>
            <span className="paragraph2">
              You can claim all NFT’s of all the packs, for free.
            </span>
            <span className="key-owner-text11 paragraph2">
              *As a reminder, unique items will be added to your package, this
              is part of the advantages of the key.
            </span>

            <button className="key-owner-button mint-button button">
              Mint for free
            </button>
            <span className="paragraph2">
              Have you already mint it ? Claim your clothes <u>here.</u>
            </span>
          </div>
        </main>

      <div className="exclusive-items-container">
        <h3 className="h3">Exclusive items of this drop</h3>
        <div className="item-container">
          <div className="item">
          <img className="image" src="./assets/tee burn-600w.png"></img>
            <span className="itemTitle">BeRies Classic logo *Team only</span>
          </div>
          <div className="item">
          <img className="image" src="./assets/tee burn-600w.png"></img>
            <span className="itemTitle">BeRies Team & Friend’s</span>
          </div>
        </div>
      </div>
        
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
        .claim-your-nft{
          overflow: hidden;

        }
        .item-container{
          display: flex;
          height: 100%;
          align-items: flex-start;
          flex-direction: row;
          margin-top: 30px;
          
        }
        .item{
          display: flex;
          height: 100%;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        .image{
          width: 70%;
          object-fit: cover;
        }
          .exclusive-items-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits)
          }


          .key-owner-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            overflow: hidden;
          }
          .key-owner-title-section {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 140px;
            flex-direction: column;
          }
          .key-owner-text01 {
            padding-bottom: 20px;
          }
          .key-owner-text05 {
            padding-bottom: 20px;
          }
          .key-owner-claim-your-nft {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: 50px;
            padding-left: 140px;
            padding-right: 140px;
            padding-bottom: 50px;
            justify-content: space-between;
            background-color: #0000ff;
          }
          .key-owner-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .key-owner-image {
            width: 70%;
            height: auto;
            align-self: center;
            object-fit: cover;
            transform : rotate(90deg) scaleY(-1);
          }
          .key-owner-container2 {
            gap: 10px;
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            overflow: hidden;
          }
          .key-owner-text11 {
            font-style: normal;
            font-weight: 300;
            font-style: italic;
          }
          .key-owner-button {
            border-width: 0px;
            margin-top: 15px;
            margin-bottom: 15px;

          }
          @media (max-width: 1200px) {
            .key-owner-claim-your-nft {
              width: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .key-owner-container1 {
              width: 50%;
              height: 50%;
            }
            .key-owner-image {
              width: 80%;
              align-self: flex-start;
            }
            .key-owner-container2 {
              width: 50%;
            }
          }
          @media (max-width: 991px) {
            .key-owner-title-section {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .key-owner-claim-your-nft {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);

            }

          }
          @media (max-width: 767px) {
            .key-owner-claim-your-nft {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .key-owner-container2 {
              width: 100%;
            }

            .item-container{
              flex-direction: column;
              gap: 80px

            }
            .key-owner-container1 {
              width: 100%;
            }
            .item{
              width: 100%;
            }
          }
          .key-owner-image {
            align-self: center;
            margin-bottom:
          }
          .key-owner-container1 {
            height: 100px;
          }


          @media (max-width: 479px) {
            .key-owner-title-section {
              width: auto;
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .key-owner-text {
              font-size: 40px;
              text-align: left;
            }
            .key-owner-claim-your-nft {
              width: auto;
              padding: var(--dl-space-space-twounits);
              flex-direction: column;
            }


          }
        `}
      </style>
    </>
  );
};

export default KeyOwner;
