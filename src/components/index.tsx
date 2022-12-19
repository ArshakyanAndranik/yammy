import React, { useState } from "react";
import data from "../data/images.json";
import Modal from "./Modal/Modal";
import styled from "styled-components";
import { accentColors, secondary } from "../assets";

const Wrapper = styled.div`
  max-width: 1350px;
  padding: 0px 89px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;



  @media (max-width: 390px) {
    padding: 0px 0px;
  }



  
  img {
    cursor: pointer;
  }
`;
const MenuItem = styled.div`
  -moz-text-align-last: center;
  text-align-last: center;
  max-width: 300px;
  text-align: center;
  margin-left: 40px;
  /* @media (max-width: 390px) {
    margin-left: 0px;
  } */
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #8d8d9b;
    font-family: ${secondary};
    font-weight: 30px;
    margin-bottom: -20px;
    /* margin-left: 115px; */
    /* @media (max-width: 390px) {
      margin-left: 110px;
    } */
  }
  h2 {
    font-family: ${secondary};
    color: ${accentColors.secondary};

    margin-bottom: -20px;
    font-size: 22px;
    /* margin-left: 115px; */
    /* @media (max-width: 390px) {
      margin-left: 110px;
    } */
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: ${accentColors.primary};
    /* margin-left: 115px; */
    /* @media (max-width: 390px) {
      margin-left: 110px;
    } */
  }
  img {
    /* padding: 0 60px; */
    /* margin-bottom: 15px; */
    max-width: 100%;
    height: auto;
  }
`;





function Index() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
//@ts-ignore
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    //@ts-ignore
    if (currentIndex + 1 >= totalLength) {
      //@ts-ignore
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      //@ts-ignore
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    //@ts-ignore
    setCurrentIndex(newIndex);
  };







  
  return (
    <Wrapper>
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
          <MenuItem>
           <img
            src={item.link}
            // alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2>{item.text}</h2>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
          </MenuItem>
         
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </Wrapper>
  );
}

export default Index;
