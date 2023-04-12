import React, { useEffect, useState } from "react";
import style from "./Form.module.css";

const Form = ({ setFinal, setHideshow }) => {
  const [file, setFile] = useState("");
  const [text, setText] = useState("");
  const [finalImg, setFinalImg] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (finalImg) {
      setHideshow(true);
    }
    setFinal({ text, finalImg });
  }, [finalImg, setFinal, setHideshow, text]);

  const fileToBase = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFinalImg(reader.result);
      console.log(reader.result);
    };
  };

  // useEffect(() => {
  //   const URL = "https://aztro.sameerkumar.website/?sign=gemini&day=today  ";
  //   fetch(URL, {
  //     method: "POST",
  //   })
  //     .then((response) => response.json())

  //     .then((json) => {
  //       const date = json.description;
  //       console.log(date);
  //     });
  // }, []);
  // console.log(data);

  return (
    <>
      <div className={style.main}>
        <div
          style={{
            background: "rgb(167 167 167 / 34%)",
            margin: "0 auto",
            maxWidth: "400px",
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="name" style={{ fontSize: "16px" }}>
              Dr. Name:
            </label>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              style={{ border: "none", borderRadius: "5px", padding: "8px 0" }}
            />
          </div>
          <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div style={{ marginTop: "60px" }}>
            <button onClick={fileToBase} className={style.btn}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
