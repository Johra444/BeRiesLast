import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { mintFunction } from "../functions/mintFunction.js";
import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BERIES_CONTRACT_ABI, BERIES_CONTRACT_ADDRESS } from "../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { utils } from "ethers";

const MintPack4 = (props) => {

  const { address, isConnected } = useAccount();
  const [minted3, setMinted3] = useState("x");

  const mintFunction = async (tokenId, amount) => {
    try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
    const contract = new ethers.Contract(
      BERIES_CONTRACT_ADDRESS,
      BERIES_CONTRACT_ABI,
      signer
      );
      const value = 0.001 * amount;
      const Mint = await contract.Mint(tokenId, amount, {
        value: utils.parseEther(value.toString()),
      });
      await Mint.wait();
        console.log("Minted");
        getMinted();
        toast.success('Minted !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    } catch (error) {
      toast.error('Something went wrong', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        console.log(error);
    }
}

  const getMinted = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        BERIES_CONTRACT_ADDRESS,
        BERIES_CONTRACT_ABI,
        signer
      );
        const minted = await contract.minted(3);
        setMinted3(ethers.utils.formatUnits(minted, 0));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    mintFunction(3, 1);
  };

  useEffect(() => {
    getMinted();
  }, [isConnected]);

  return (
    <>
      <Navbar></Navbar>

      <div className="mint-pack4-container">
        <Head>
          <title>Mint Pack 4 - BeRies</title>
          <meta property="og:title" content="Mint-pack-4 - BeRies" />
          <meta property="og:image" />
        </Head>

        <main id="mint pack 4 container" className="mint-pack4-container1">
          <div className="mint-pack4-container2">
            <img
              src="/assets/nft-boite-pack-4-1500h.webp"
              className="packImage"
            />
          </div>
          <div className="mint-pack4-container3">
            <h1 className="packTitle">Pack 4</h1>
            <span id="white" className="packDesc">
              1 Tee - 1 Hoodie - 1 Cap
            </span>
            <span id="white"className="packDesc">
            {parseInt(minted3) + 1} / 11 minted
          </span>
            {isConnected ? (<button
              id="mint pack 4 button"
              type="button"
              className="mint-pack4-mint-pack-4-button mint-button button"
              onClick={handleClick}
            >
              Mint for 0.1 ETH
            </button>) : (
              <button
              id="mint pack 4 button"
              type="button"
              className="mint-pack4-mint-pack-4-button mint-button button disabled">
              Please connect your wallet
            </button>
            )}
            <a href="#item-of-this-pack" className="mint-pack4-link">
              See clothes here
            </a>
          </div>
        </main>
        <section
          id="item-of-this-pack"
          className="mint-pack4-item-of-this-pack"
        >
          <h2 className="packContains">Pack 4 Contains :</h2>
          <div className="mint-pack4-container4">
            <div className="mint-pack4-container5">
              <img
                alt="BeRies Pack 4 Hoodie"
                src="./assets/collection/pack 4/hoodie pack 4.png"
                className="mint-pack4-image1"
              />
              <span id="white"className="itemTitle">1 Hoodie</span>
            </div>
            <div className="mint-pack4-container6">
              <img
                alt="BeRies pack 4 Tee"
                src="./assets/collection/pack 4/tee pack 4.png"
                className="mint-pack4-image2"
              />
              <span id="white"className="itemTitle">1 Tee</span>
            </div>
            <div className="mint-pack4-container7">
              <img
                alt="image"
                src="./assets/collection/pack 4/cap pack 4.png"
                className="mint-pack4-image3"
              />
              <span id="white"className="itemTitle">1 Cap</span>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          limit={1}
          />
      <Footer rootClassName="footer-root-class-name"></Footer>

      <style jsx>
        {`
        .packContains{
          background: white;
          background-color: white; 
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 20px;
          padding-right: 100px;
          border-bottom-right-radius: 30px;
          font-weight: 500;
          color: #0000ff;
          
        }
          .disabled{
            cursor: not-allowed;
          }
          .mint-pack4-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ff7fbf;
          }
          .mint-pack4-container1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 140px;
            padding-right: 140px;
          }
          .mint-pack4-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack4-image {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: contain;
          }
          .mint-pack4-container3 {
            gap: 10px;
            flex: 0 0 auto;
            width: 40%;
            height: 80vh;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack4-text1 {
            color: rgb(255, 255, 255);
          }
          .mint-pack4-mint-pack-4-button {
            color: #ff7fbf;
            border-width: 0px;
          }
          .mint-pack4-link {
            color: rgb(255, 255, 255);
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-twounits);
            text-decoration: underline;
          }
          .mint-pack4-item-of-this-pack {
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: 40px;
            padding-right: 140px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mint-pack4-text2 {
            color: rgb(255, 255, 255);
            font-size: 48px;
            margin-bottom: 40px;
          }
          .mint-pack4-container4 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
            margin-top:20px;

          }
          .mint-pack4-container5 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack4-image1 {
            width: 100%;
            align-self: center;
            object-fit: contain;
            margin-bottom: 20px;
          }
          .mint-pack4-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack4-container6 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack4-image2 {
            width: 140%;
            padding: 30px;
            align-self: center;
            margin-bottom: 20px;
          }
          .mint-pack4-text4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack4-container7 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack4-image3 {
            width: 100%;
            align-self: center;
            object-fit: contain;
            margin-bottom: 20px;
            padding: 30px;

          }
          .mint-pack4-text5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          @media (max-width: 1200px) {
            .mint-pack4-container1 {
              gap: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .mint-pack4-container2 {
              width: 50%;
              height: 100%;
              justify-content: center;
            }
            .mint-pack4-image {
              width: 100%;
              height: auto;
              align-self: center;
            }
            .mint-pack4-container3 {
              width: 40%;
              align-self: center;
              align-items: flex-start;
              justify-content: center;
            }
            .mint-pack4-item-of-this-pack {
              height: auto;
            }
            .mint-pack4-container4 {
              gap: var(--dl-space-space-threeunits);
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .mint-pack4-container1 {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .mint-pack4-container2 {
              width: 100%;
              height: auto;
            }
            .mint-pack4-image {
              width: 70%;
              height: auto;
            }
            .mint-pack4-container3 {
              width: 70%;
              height: auto;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .mint-pack4-item-of-this-pack {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .mint-pack4-container4 {
              align-items: center;
              flex-direction: column;
            }
            .mint-pack4-container5 {
              width: 100%;
              height: auto;
            }
            .mint-pack4-image1 {
              width: 70%;
              height: auto;
            }
            .mint-pack4-text3 {
              font-size: 30px;
            }
            .mint-pack4-container6 {
              width: 100%;
              height: auto;
            }
            .mint-pack4-image2 {
              width: 80%;
              height: auto;
              padding: 0px;

            }
            .mint-pack4-text4 {
              font-size: 30px;
            }
            .mint-pack4-container7 {
              width: 100%;
              height: auto;
            }
            .mint-pack4-image3 {
              width: 70%;
              height: auto;
            }
            .mint-pack4-text5 {
              font-size: 30px;
            }
          }
          @media (max-width: 767px) {
            .mint-pack4-container1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              height: 100vh;

            }
            .mint-pack4-container2 {
              width: 100%;
              height: 30%;
            }
            .mint-pack4-image {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
            }
            .mint-pack4-container3 {
              gap: 20;
              width: 100%;
              align-self: center;
            }
            .mint-pack4-item-of-this-pack {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mint-pack4-container4 {
              gap: var(--dl-space-space-twounits);
              width: auto;
              height: auto;
              align-self: stretch;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .mint-pack4-container5 {
              width: auto;
              height: auto;
            }
            .mint-pack4-image1 {
              width: 70%;
            }
            .mint-pack4-container6 {
              width: auto;
              height: auto;
            }
            .mint-pack4-image2 {
              width: 100%;
              padding: 0px;

            }
            .mint-pack4-container7 {
              width: auto;
              height: auto;
            }
            .mint-pack4-image3 {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .mint-pack4-container2 {
              height: auto;
            }
            .mint-pack4-image {
              width: 100%;
            }
            .mint-pack4-container3 {
              gap: 20px;
              width: 100%;
              height: auto;
            }
            .mint-pack4-item-of-this-pack {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mint-pack4-text2 {
              font-size: 40px;
              text-align: left;
            }
            .mint-pack4-container4 {
              gap: 40;
              flex-direction: column;
            }
            .mint-pack4-image1 {
              width: 100%;
            }
            .mint-pack4-image2 {
              width: 100%;
              padding: 0px;

            }
            .mint-pack4-image3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default MintPack4;
