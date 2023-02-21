import React from "react";
import "./Newarrival.css";
import Newarrivalmini from "./Newarrivalmini";

function Newarrival() {
  const details = [
    {
      title: "Samsung 40N5300 S...",
      img: "/lcd.png",
      wrongrate: "RS 50.000",
      rate: "RS 56.000",
    },
    {
      title: "Samsung Automatic.. ",
      img: "/fridge.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
    {
      title: "Haier HSU-12HFMAC ..",
      img: "/ac.png",
      wrongrate: "RS 76.000",
      rate: "RS 70.000",
    },
    {
      title: "Anex Roti Maker ..",
      img: "/roti.png",
      wrongrate: "RS 70.000",
      rate: "RS 60.000",
    },
    {
      title: "Gree GS-12FITH..",
      img: "/acgold.png",
      wrongrate: "RS 86.000",
      rate: "RS 80.000",
    },
    {
      title: "Gree Air Conditioner..",
      img: "/2ac.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
  ];

  return (
    <div className="newarrival">
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-12 newarrivalTop">
              <div>
                <h1>
                  <span>New</span> Arrivals
                </h1>
              </div>
              <div>
                <img src="timer.png" alt="" />
              </div>
            </div>

            {/* component */}

            <div className="newarrivalmini1">
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[0].title}
                  img={details[0].img}
                  wrongrate={details[0].wrongrate}
                  rate={details[0].rate}
                />{" "}
              </div>
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[1].title}
                  img={details[1].img}
                  wrongrate={details[1].wrongrate}
                  rate={details[1].rate}
                />{" "}
              </div>
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[2].title}
                  img={details[2].img}
                  wrongrate={details[2].wrongrate}
                  rate={details[2].rate}
                />{" "}
              </div>
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[3].title}
                  img={details[3].img}
                  wrongrate={details[3].wrongrate}
                  rate={details[3].rate}
                />{" "}
              </div>
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[4].title}
                  img={details[4].img}
                  wrongrate={details[4].wrongrate}
                  rate={details[4].rate}
                />{" "}
              </div>
              <div className="newarrivalmini11">
                <Newarrivalmini
                  title={details[5].title}
                  img={details[5].img}
                  wrongrate={details[5].wrongrate}
                  rate={details[5].rate}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newarrival;
