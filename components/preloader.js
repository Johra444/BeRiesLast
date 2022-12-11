import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [display, setDisplay] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const displayFromSession = sessionStorage.getItem('display');
    if (displayFromSession) {
      setDisplay(displayFromSession === 'true');
    }
  }, []);

  const handleClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setDisplay(false);
      sessionStorage.setItem('display', false);
    }, 1500);
  };
  return (
    <>
      <div className={`preloader-container`} style={{ display: display ? 'flex' : 'none', opacity, transition: 'opacity 1s' }}>
        <img
        onClick={handleClick}
          src="/assets/logo blanc.svg"
          className="preloader-logo-beries-blanc"
        />
        <span onClick={handleClick} className="press-to-enter">Press to enter...</span>
        <img onClick={handleClick} src="/assets/arrow.svg" className="preloader-arrow" />
      </div>
      <style jsx>
        {`
          .preloader-container {
            gap: var(--dl-space-space-halfunit);
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 9999;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #0000ff;
          }
          .preloader-logo-beries-blanc {
            width: 363px;
            animation: logo-appear 1.5s cubic-bezier(0.83, 0, 0.17, 1) forwards;
            cursor: pointer;
          }
          .preloader-arrow {
            width: 40px;
            transform: rotateZ(-90deg);
            animation: arrow-appear 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
            animation-delay: 1.5s;
            opacity: 0;
            cursor: pointer;
          }

          .press-to-enter {
            color: white;
            animation: text-appear 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
            animation-delay: 1s;
            opacity: 0;
            cursor: pointer;
          }

          @keyframes text-appear {
            0% {
              transform: translateY(-30px);

              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes arrow-appear {
            0% {
              transform: translateY(-30px);
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes logo-appear {
            0% {
              transform: translateY(-65px);
              filter: blur(5px);
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};


export default Preloader;
