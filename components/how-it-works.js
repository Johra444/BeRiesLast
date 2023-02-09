import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section id="how it works" className="how-it-works-how-it-works">
        <h2 className="h2">How it works ?</h2>
        <div className="how-it-works-steps-container">
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src="./assets/1.svg"
                  className="how-it-works-image"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3 className="titre">Mint</h3>
              <span id="black" className="text">
                <span>
                Choose the pack of clothes you want, then mint the NFT corresponding to the pack. 
                You can burn them to order your clothes or you can keep them to burn later 
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src="./assets/2.svg"
                  className="how-it-works-image"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3 className="titre">Burn</h3>
              <span id="black" className="text">
                <span>
                In order for us to send you your clothes, you need to burn your NFT (as proof of order) to be able to fill in the form for shipping information. 

                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src="./assets/3.svg"
                  className="how-it-works-image"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3 className="titre">Shipping</h3>
              <span id="black" className="text">
                <span>
                Once the form is filled in, the team will prepare and send your order with love. Some little surprises will be included in the packages.

                </span>
                <br></br>
              </span>
            </div>
          </div>
          
        </div>
      </section>
      <style jsx>
        {`.text{
          line-height: 1.25;
          text-align: justify;
        }
        .titre {
          margin-bottom: 5px;
        }
          .how-it-works-how-it-works {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .how-it-works-steps-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            gap: 10px;
          }
          .how-it-works-step-1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 33%
          }
          .how-it-works-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-image {
            width: 50px;
            align-self: center;
            object-fit: contain;
          }
          .how-it-works-container2 {
            display: flex;
            flex-direction: column;
            width: 

          }


          .how-it-works-image1 {
            width: 50px;
            align-self: center;
            object-fit: contain;
          }

          .how-it-works-image2 {
            width: 100%;
            align-self: center;
            object-fit: contain;
          }


          @media (max-width: 991px) {
            .how-it-works-how-it-works {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .how-it-works-how-it-works {
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .how-it-works-steps-container {
              align-items: flex-start;
              padding-left: 0px;
              flex-direction: column;
            }
            .how-it-works-step-1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .how-it-works-container {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: center;
            }
            .how-it-works-container1 {
              background-color: transparent;
            }
            .how-it-works-image {
              height: 40px;
            }
            .how-it-works-container2 {
              width: 100%;
              height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 10px;
              justify-content: space-between;
            }



            .how-it-works-image1 {
              height: 40px;
            }

            .how-it-works-image2 {
              height: 40px;
            }


          }
          @media (max-width: 479px) {
            .how-it-works-how-it-works {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .how-it-works-steps-container {
              padding-left: 0px;
            }
            .how-it-works-container2 {
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 10px;
            }

          }
        `}
      </style>
    </>
  );
};



export default HowItWorks;
