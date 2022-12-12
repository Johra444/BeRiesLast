import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link href="/hoodlife"><span className="navigation-links-text">Hoodlife</span></Link>
        <div
          data-thq="thq-dropdown"
          className="navigation-links-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="navigation-links-dropdown-toggle"
          >
            <span className="navigation-links-text">Mint</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="navigation-links-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="navigation-links-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown list-item"
            >
              <Link href="/mint-pack-1">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle1 dropdown"
                  >
                    <span className="navigation-links-text1">Pack 1</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown1 list-item"
            >
              <Link href="/mint-pack-2">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle2 dropdown"
                  >
                    <span className="navigation-links-text2">Pack 2</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown2 list-item"
            >
              <Link href="/mint-pack-3">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle3 dropdown"
                  >
                    <span className="navigation-links-text3">Pack 3</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown3 list-item"
            >
              <Link href="/mint-pack-4">
                <a>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navigation-links-dropdown-toggle4 dropdown"
                  >
                    <span className="navigation-links-text4">Pack 4</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/burn">
          <a className="navigation-links-link1 nav-link">{props.Burn}</a>
        </Link>
        <Link href="/key-owner">
          <a className="navigation-links-link2 nav-link">{props.text2}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-text {
            color: #0000ff;
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navigation-links-dropdown-arrow {
            transition: 0.3s;
          }
          .navigation-links-icon {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navigation-links-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .navigation-links-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle1 {
            color: #0000ff;
            transition: 0.3s;
            text-decoration: none;
          }

          .navigation-links-dropdown-toggle1:hover {
            fill: #fff;
            color: #ffffff;
            background-color: #0000ff;
          }

          .navigation-links-text1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .navigation-links-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle2 {
            fill: #595959;
            color: #0000ff;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle2:hover {
            fill: #fff;
            color: #ffffff;
            background-color: #0000ff;
          }
          .navigation-links-text2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .navigation-links-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle3 {
            fill: #595959;
            color: #0000ff;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #0000ff;
          }
          .navigation-links-text3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .navigation-links-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle4 {
            fill: #595959;
            color: #0000ff;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle4:hover {
            fill: #fff;
            color: #fff;
            background-color: #0000ff;
          }
          .navigation-links-text4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .navigation-links-link1 {
            text-decoration: none;
            font-weight: 600;
          }
          .navigation-links-link2 {
            color: #0000ff;
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
              display: none;
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-root-class-name12 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              display: none;
            }
            .navigation-links-dropdown-toggle {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-dropdown-list {
              left: 0%;
            }
            .navigation-links-root-class-name12 {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

NavigationLinks.defaultProps = {
  Burn: "Burn",
  rootClassName: "",
  text2: "Key Owner",
};

NavigationLinks.propTypes = {
  Burn: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
};

export default NavigationLinks;
