import React from "react";

import PropTypes from "prop-types";

const HowItWorks = (props) => {
  return (
    <>
      <section id="how it works" className="how-it-works-how-it-works">
        <h2 className="h2">{props.heading}</h2>
        <div className="how-it-works-steps-container">
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src={props.image_src}
                  className="how-it-works-image"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3>{props.heading1}</h3>
              <span id="black" className="text">
                <span>
                  1Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src={props.image_src1}
                  className="how-it-works-image1"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3>{props.heading2}</h3>
              <span id="black" className="text">
                <span>
                  2Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  src={props.image_src2}
                  className="how-it-works-image2"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h3>{props.heading3}</h3>
              <span id="black" className="text">
                <span>
                  3Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .how-it-works-how-it-works {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .how-it-works-steps-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
          }
          .how-it-works-step-1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
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
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
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
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
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

HowItWorks.defaultProps = {
  heading: "How it works ?",
  heading1: "Mint",
  heading2: "Burn",
  heading3: "Shipping",
  image_src: "/assets/1.svg",
  image_src1: "/assets/2.svg",
  image_src2: "/assets/3.svg",
};


export default HowItWorks;
