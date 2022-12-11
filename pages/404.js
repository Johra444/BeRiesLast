import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="body">
        <div className="container">
          <h1 className="h1">404</h1>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .body {
            overflow: hidden;
            position: absolute;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            background-color: #0000ff; 
            color: white;
            align-items: center;

            
          }
          
          .container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 5%;
            
          }

          .h1 {
            font-size: 540px;
            font-weight: bold;
            text-align: center;
            
          }

          
          @media screen and (max-width: 1100px) {
            .h1 {
              font-size: 400px;
              display: flex;
          }

          .container {
            top: 20%;
          }

          @media (max-width: 767px) {
            .h1 {
              font-size: 150px;
            }

            .container {
              top: 30%;
            }

          }


        `}
      </style>
    </>
  );
}
