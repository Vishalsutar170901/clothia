import React from "react";
import Card from "./card"; // Make sure to use uppercase "Card" here
import Sdata  from "./sdata";
import LogoImage from "../src/image/img4.png";
import LogoImages from "../src/image/img2.png";
import LogoImagess from "../src/image/img3.png";
import Sdata2 from "./sdata2";

const Service = () => {
  return (
    <>
   
     <div className="my-5 men-section">
        <h1 className="text-center">Men's Top wear</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
        <div className="card larger-card"> 
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
              Sdata.map((val,ind) => {
                return <Card key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                des={val.Des}
                btnname={val.btnname}
                />
              })
             }
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="my-5 men-section">
        <h1 className="text-center">Women's Top wear</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
        <div className="card larger-card"> 
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
              Sdata2.map((val,ind) => {
                return <Card key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                des={val.Des}
                btnname={val.btnname}
                />
              })
             }
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Service;
