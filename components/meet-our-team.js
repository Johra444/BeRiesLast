import React from "react";

import PropTypes from "prop-types";

const MeetOurTeam = (props) => {
  return (
    <>
      <section id="meet our team" className="meet-our-team-meet-our-team">
      <h2 id="white" className="h2">{props.heading}</h2>
        <div className="meet-our-team-team-1row-container">
          <div className="meet-our-team-container">
            <img
              id="team-pic"
              src={props.image_src}
              className="team-pic"
            />
            <div className="meet-our-team-container01">
              
              <span id="white" className="h3">
                {props.member1}
              </span>
              <span className="text">
                {props.role1}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container02">
            <img
              src={props.image_src1}
              className="meet-our-team-image1 team-pic"
            />
            <div className="meet-our-team-container03">
              <span id="white" className="h3">
                {props.member2}
              </span>
              <span className="text">
                {props.role2}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container04">
            <img
              src={props.image_src2}
              className="meet-our-team-image2 team-pic"
            />
            <div className="meet-our-team-container05">
              <span id="white" className="h3">
                {props.member3}
              </span>
              <span className="text">
                {props.role3}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container06">
            <img
              src={props.image_src3}
              className="meet-our-team-image3 team-pic"
            />
            <div className="meet-our-team-container07">
              <span id="white" className="h3">
                {props.member4}
              </span>
              <span className="text">
                {props.role4}
              </span>
            </div>
          </div>
        </div>
        <div className="meet-our-team-team-1row-container1">
          <div className="meet-our-team-container08">
            <img
              id="team-pic"
              src={props.image_src4}
              className="team-pic"
            />
            <div className="meet-our-team-container09">
              <span id="white" className="h3">{props.member5}</span>
              <span className="text">
                {props.role5}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container10">
            <img
              src={props.image_src5}
              className="meet-our-team-image5 team-pic"
            />
            <div className="meet-our-team-container11">
              <span id="white" className="h3">
                {props.member6}
              </span>
              <span className="text">
                {props.role6}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container12">
            <img
              src={props.image_src6}
              className="meet-our-team-image6 team-pic"
            />
            <div className="meet-our-team-container13">
              <span id="white" className="h3">
                {props.member7}
              </span>
              <span className="text">
                {props.role7}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container14">
            <img
              src={props.image_src7}
              className="meet-our-team-image7 team-pic"
            />
            <div className="meet-our-team-container15">
              <span id="white" className="h3">
                {props.member8}
              </span>
              <span className="text">
                {props.role8}
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .meet-our-team-meet-our-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: auto;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #0000ff;
          }

          .meet-our-team-team-1row-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .meet-our-team-container {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-container01 {
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

          .meet-our-team-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image1 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container03 {
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

          .meet-our-team-container04 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image2 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container05 {
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

          .meet-our-team-container06 {
            flex: 0 0 auto;
            width: auto;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .meet-our-team-image3 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container07 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }

          .meet-our-team-team-1row-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .meet-our-team-container08 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-container09 {
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

          .meet-our-team-container10 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image5 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container11 {
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

          .meet-our-team-container12 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image6 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container13 {
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

          .meet-our-team-container14 {
            flex: 0 0 auto;
            width: auto;
            height: 60px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .meet-our-team-image7 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container15 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }

          @media (max-width: 1200px) {
            .meet-our-team-team-1row-container {
              justify-content: space-between;
            }
            .meet-our-team-container06 {
              width: auto;
            }
            .meet-our-team-container07 {
              width: auto;
            }

            .meet-our-team-team-1row-container1 {
              justify-content: space-between;
            }
            .meet-our-team-container14 {
              width: auto;
            }
            .meet-our-team-container15 {
              width: auto;
              align-items: stretch;
            }
          }
          @media (max-width: 991px) {
            .meet-our-team-meet-our-team {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }

          }
          @media (max-width: 767px) {
            .meet-our-team-meet-our-team {
              align-items: flex-start;
              padding-left: var(--dl-space-space-twounits);
            }
            .meet-our-team-team-1row-container {
              gap: 100px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .meet-our-team-container {
              width: 25%;
            }
            .meet-our-team-container01 {
              width: auto;
            }
            .meet-our-team-team-1row-container1 {
              gap: 100px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .meet-our-team-container08 {
              width: 25%;
            }
            .meet-our-team-container09 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .meet-our-team-team-1row-container {
              gap: 150px;
            }
            .meet-our-team-team-1row-container1 {
              gap: 150px;
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

MeetOurTeam.defaultProps = {
  heading: "Meet our team",

  member1: "@0x11nze",
  role1: "CEO - Artistic Director",
  image_src: "/assets/team/Onze.png",

  member2: "@0xTinmar",
  role2: "Front End Dev",
  image_src1: "/assets/team/tinmar.png",

  member3: "@Johra",
  role3: "Solidity Dev",
  image_src2: "/assets/account-200h.png",

  member4: "@1tbk1",
  role4: "Chief Editor",
  image_src3: "/assets/team/1tbk1.png",

  member5: "@SpadeFX",
  role5: "BeRies Builder",
  image_src4: "/assets/team/SpadeFx.png",

  member6: "@IdrissMarcus",
  role6: "Muse",
  image_src5: "/assets/team/IdrissMarcus.png",

  member7: "@Kahili_S",
  role7: "Muse",
  image_src6: "/assets/team/Kahili.png",

  member8: "@1tbk1",
  role8: "Chief Editor",
  image_src7: "/assets/account-200h.png",
};


export default MeetOurTeam;
