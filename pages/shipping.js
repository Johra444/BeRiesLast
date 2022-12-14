import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Shipping = (props) => {
  return (
    <>
      <Navbar></Navbar>

      <div className="shipping-container">
        <Head>
          <title>Shipping - BeRies</title>
          <meta property="og:title" content="Shipping - BeRies" />
        </Head>
        <form
          id="shpping-form"
          name="shipping-form"
          className="shipping-shipping-form"
        >
          <div className="shipping-form-container">
            <div className="shipping-form-row1">
              <div className="shipping-email">
                <span className="input-title">Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="anon@beries.eth"
                  className="input input-form"
                />
              </div>
              <div className="shipping-name">
                <span className="input-title">Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Onze Gmi"
                  className="shipping-name-input input input-form"
                />
              </div>
              <div className="shipping-street">
                <span className="input-title">Street</span>
                <input
                  type="text"
                  id="Street"
                  name="Street"
                  required
                  placeholder="Av President Kennedy"
                  className="shipping-street-input input input-form"
                />
              </div>
              <div className="shipping-city">
                <span className="input-title">City</span>
                <input
                  type="text"
                  id="City"
                  name="City"
                  required
                  placeholder="Paris"
                  className="shipping-city-input input input-form"
                />
              </div>
            </div>
            <div className="shipping-form-row-2">
              <div className="shipping-state">
                <span className="input-title">State/Prov/Region</span>
                <input
                  type="text"
                  id="State"
                  name="State"
                  required
                  placeholder="Ile-de-France"
                  className="input input-form"
                />
              </div>
              <div className="shipping-zip">
                <span className="input-title">Postal/Zip</span>
                <input
                  type="text"
                  id="Zip code"
                  name="Zip code"
                  required
                  placeholder="75007"
                  className="shipping-zip-input input input-form"
                />
              </div>
              <div className="shipping-country">
                <span className="input-title">Country</span>
                <input
                  type="text"
                  id="Country"
                  name="Country"
                  required
                  placeholder="France"
                  className="shipping-country-input input input-form"
                />
              </div>
              <div className="shipping-g-d-p-r">
                <span className="shipping-text paragraph2">
                  GDPR Requirements
                </span>
                <span className="shipping-text1 paragraph2">
                  Allow us permission to store your details in order to send
                  your merchandise. Once your parcel has been delivered your
                  details will be deleted.
                </span>
              </div>
              <div className="shipping-container1">
                <div className="shipping-accept-field">
                  <input
                    type="checkbox"
                    id="accept"
                    required
                    className="shipping-checkbox"
                  />
                  <span className="shipping-text2 paragraph2">Accept</span>
                </div>
                <div className="shipping-sign-and-submit">
                  <button
                    id="sign and submit"
                    type="submit"
                    className="shipping-button button"
                  >
                    Sign and submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .shipping-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .shipping-shipping-form {
            width: 100%;
            height: 510x;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .shipping-form-container {
            gap: 0;
            flex: 0 0 auto;
            width: 100%;
            height: 510px;
            display: flex;
            align-items: flex-start;
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: row;
            justify-content: center;
          }
          .shipping-form-row1 {
            gap: 20px;
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            padding-right: 30px;
            flex-direction: column;
          }
          .shipping-email {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-name {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-name-input {
            font-size: 18px;
            font-weight: 400;
          }
          .shipping-street {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-street-input {
            font-size: 18px;
            font-weight: 400;
          }
          .shipping-city {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-city-input {
            font-size: 18px;
            font-weight: 400;
          }
          .shipping-form-row-2 {
            gap: 20px;
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            padding-left: 30px;
            flex-direction: column;
          }
          .shipping-state {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-zip {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-zip-input {
            font-size: 18px;
            font-weight: 400;
          }
          .shipping-country {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-country-input {
            font-size: 18px;
            font-weight: 400;
          }
          .shipping-g-d-p-r {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shipping-text {
            color: #0000ff;
            font-style: normal;
            font-weight: 700;
          }
          .shipping-text1 {
            color: #0000ff;
          }
          .shipping-container1 {
            height: 30px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .shipping-accept-field {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
          }
          .shipping-checkbox {
            margin-right: 10;
          }
          .shipping-text2 {
            color: #0000ff;
          }
          .shipping-sign-and-submit {
            flex: 0 0 auto;
            width: 50%;
            height: 30px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .shipping-button {
            color: #0000ff;
            border-color: #0000ff;
          }
          @media (max-width: 767px) {
            .shipping-form-container {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .shipping-shipping-form {
              height: 1000px;
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .shipping-form-container {
              height: auto;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              flex-direction: column;
            }
            .shipping-form-row1 {
              width: auto;
              height: auto;
            }
            .shipping-form-row-2 {
              width: auto;
              padding-top: 20px;
              padding-left: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Shipping;
