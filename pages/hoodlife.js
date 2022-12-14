import React from "react";
import Head from "next/head";
import styles from "../styles/Hoodlife.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { useEffect } from "react";
import { useAccount, useBalance } from "wagmi";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { HLC_CONTRACT_ABI, HLC_CONTRACT_ADDRESS } from "../constants";
import { ethers } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { utils } from "ethers";

const firebaseConfig = {
  apiKey: "AIzaSyDbeEo8D_EAnkLqdhz9FVbWxCYqMzUMnNI",
  authDomain: "beries-53ae1.firebaseapp.com",
  projectId: "beries-53ae1",
  storageBucket: "beries-53ae1.appspot.com",
  messagingSenderId: "991951043377",
  appId: "1:991951043377:web:5b71cbebad323283e10e10",
  measurementId: "G-9RBVVZFRFX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Hoodlife = () => {
  const [userBalance, setUserBalance] = useState(["X", "X", "X", "X"]);
  const [burnedBalance, setBurnedBalance] = useState([0, 0, 0, 0]);
  const [wannaBurn, setWannaBurn] = useState([0, 0, 0, 0]);
  const { address, isConnected } = useAccount();
  const [submitButton, setSubmitButton] = useState(true);

  const doubleBalance = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        BERIES_CONTRACT_ADDRESS,
        BERIES_CONTRACT_ABI,
        signer
      );
      const balance = [];
      const burned = [];
      for (let i = 0; i < 4; i++) {
        const balanceOf = await contract.balanceOf(address, i);
        const tBurnedBalance = await contract.burnedToken(address, i);
        balance[i] = ethers.utils.formatUnits(balanceOf, 0);
        burned[i] = ethers.utils.formatUnits(tBurnedBalance, 0);
      }
      console.log(burned);
      setUserBalance(balance);
      setBurnedBalance(burned);
      firbaseData(burned);
    } catch (error) {
      console.log(error);
    }
  };
  const firbaseData = async (burned) => {
    const docRef = doc(db, "orders", address);
    const docSnap = await getDoc(docRef);
    
    try {
      var snapshot = docSnap.data().burned;
      if (snapshot != undefined) {
        var snapshot = docSnap.data().burned;
        console.log(snapshot, "IL RENTRE");
        if (snapshot.toString() != burned.toString()) {
          setSubmitButton(false);
        }
      }
    } catch (error) {
      if (burned.toString() != "0,0,0,0") {
        setSubmitButton(false);
        console.log("You can submit your order");
      }
    }
  };

  const mintFunction = async (amount) => {
    try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
    const contract = new ethers.Contract(
      HLC_CONTRACT_ADDRESS,
      HLC_CONTRACT_ABI,
      signer
      );
      const value = 0.0003 * amount;
      const Mint = await contract.Mint(amount, {
        value: utils.parseEther(value.toString()),
      });
      await Mint.wait();
        console.log("Minted");
      //  getMinted();
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

  const burn = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        BERIES_CONTRACT_ADDRESS,
        BERIES_CONTRACT_ABI,
        signer
      );
      console.log("Your current balance is  : ", userBalance);
      console.log("You've already burned : ", burnedBalance, " tokens");
      console.log("You want to burn : ", wannaBurn, " tokens");
      const Burn = await contract.burnMany(wannaBurn);
      await Burn.wait();
      console.log("Burned");
      doubleBalance();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBurn = async () => {
    if (burnedBalance) burn();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "orders", address), {
        address: address,
        name: state.name,
        email: state.email,
        region: state.region,
        zip: state.zip,
        street: state.street,
        country: state.country,
        city: state.city,
        info: state.info,
        burned: burnedBalance,
      });
      console.log("Document written with ID: ", address);
      setSubmitButton(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const initialState = {
    name: "",
    email: "",
    region: "",
    zip: "",
    street: "",
    country: "",
    city: "",
    info: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "update_input":
        return {
          ...state,
          [action.key]: action.value,
        };
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    doubleBalance();
  }, [isConnected]);

  const handleMint = () => {
    mintFunction(1);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className={styles.burnContainer}>
        <Head>
          <title>Burn - BeRies</title>
          <meta property="og:title" content="Burn - BeRies" />
<<<<<<< Updated upstream
        </Head>       

=======
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
       
>>>>>>> Stashed changes
        {isConnected ? (
          <div className={styles.div}>
        <section id="Title" className={styles.burnContainer1}>
          <h1 className={styles.burnText}>HoodLife Club x BeRies</h1>
          <span className={styles.paragraph}>
            Burn your NFT to receive the BeRies pack you choose.
          </span>
        </section>
        <div className={styles.whiteContainer}>
          <div className={styles.ContainerRight}>
              <img className={styles.tee} src="/assets/tee.png"  />  
          </div>
          <div className={styles.ContainerLeft}>
              <img className={styles.hlclogo} src="/assets/HLClogo.png"  />
                <button className={styles.mintButton} onClick={handleMint}>
                  Mint
                </button>
                <span className={styles.paragraph}>
            Burn your NFT to receive the BeRies pack you choose.
          </span>
          </div>
        </div>
            <div className={styles.blueContainer}>
              <div className={styles.ContainerRight}>
                <h1>Burn your NFT to access form</h1>
                <button className={styles.burnButton} onClick={handleBurn}>
                  Burn
                </button>
                <p>If you already did, form is down below</p>
                
              </div>
              <div className={styles.ContainerLeftImg}>
                <img className={styles.hlcCharacter} src="/assets/beries2.png"  />
              </div>
            </div>
            <form
              id="burn for shipping"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.burnImageContainer}>
                <div className={styles.row}>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Email</h1>
                    <input
                      placeholder="anon@beries.com"
                      className={styles.input}
                      value={state.email}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "email",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>State/Prov/Region</h1>
                    <input
                      placeholder="Ile-de-France"
                      className={styles.input}
                      value={state.region}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "region",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Name</h1>
                    <input
                      placeholder="Onze Gmi"
                      className={styles.input}
                      value={state.name}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "name",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Postal/Zip</h1>
                    <input
                      placeholder="75007"
                      className={styles.input}
                      value={state.zip}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "zip",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Street</h1>
                    <input
                      placeholder="5 av. Anatole France"
                      className={styles.input}
                      value={state.street}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "street",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Country</h1>
                    <input
                      placeholder="France"
                      className={styles.input}
                      value={state.country}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "country",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>City</h1>
                    <input
                      placeholder="Paris"
                      className={styles.input}
                      value={state.city}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "city",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className={styles.inputContainer}>
                    <h1 className={styles.inputTitle}>Additional info</h1>
                    <input
                      placeholder="anon@beries.com"
                      required 
                      className={styles.input}
                      value={state.info}
                      onChange={(e) =>
                        dispatch({
                          type: "update_input",
                          key: "info",
                          value: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div className={styles.row}>
                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={submitButton}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
      <div className={styles.container}>
        <img
          src="/assets/plug.webp"
          className={styles.plug}
        />
        <div className={styles.connectContainer}>
          <span className={styles.text1}>Connect your wallet</span>
          <span className={styles.text2}>If you want go on this page.</span>
        </div>
      </div>
        )}
        <Footer rootClassName="footer-root-class-name4"></Footer>
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
      </div>
    </>
  );
};

export default Hoodlife;
