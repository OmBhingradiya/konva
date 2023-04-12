import React, { useEffect, useState } from "react";
import { Stage, Layer, Text, Image } from "react-konva";
import Form from "./form/Form";
import style from "./Konva.module.css";

const Konva = () => {
  const [final, setFinal] = useState({});
  const [userImage, setUserImg] = useState("");
  const [bgImg, setBgImg] = useState("");
  const [hideshow, setHideshow] = useState(false);

  useEffect(() => {
    const userbg = new window.Image();
    userbg.src = final.finalImg;
    userbg.onload = () => {
      setUserImg(userbg);
    };

    const frame = new window.Image();
    frame.src = "/bgImg.png";
    frame.onload = () => {
      setBgImg(frame);
    };
  }, [final]);

  return (
    <div>
      {/* <marquee direction="right">demo</marquee> */}
      {hideshow ? (
        <div className={style.main}>
          <Stage width={380} height={window.innerHeight}>
            <Layer>
              <Image
                image={userImage}
                x={80}
                y={170}
                width={225}
                height={225}
              />
              <Image image={bgImg} width={380} height={window.innerHeight} />
              <Text text={final.text} y={445} width={380} align={"center"} />
            </Layer>
          </Stage>
        </div>
      ) : (
        <div>
          <Form setFinal={setFinal} setHideshow={setHideshow} />
        </div>
      )}
    </div>
  );
};

export default Konva;
