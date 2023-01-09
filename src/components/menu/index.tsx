import React, { useState } from "react";
import styled from "styled-components";
import { accentColors, secondary } from "../../assets";

import menu from "../../data/images.json";
import Modal from "../modal/Modal";

const Wrapper = styled.div`
  max-width: 1350px;
  padding: 0px 89px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
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
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #8d8d9b;
    font-family: ${secondary};
    font-weight: 30px;
    margin-bottom: -20px;
  }
  h2 {
    font-family: ${secondary};
    color: ${accentColors.secondary};
    margin-bottom: -20px;
    font-size: 22px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: ${accentColors.primary};
  }
  img {
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
    const totalLength = menu.menu.length;
    //@ts-ignore
    if (currentIndex + 1 >= totalLength) {
      //@ts-ignore
      setCurrentIndex(0);
      const newUrl = menu.menu[0].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex + 1;
    const newUrl = menu.menu.filter((item) => {
      return menu.menu.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  const handelRotationLeft = () => {
    const totalLength = menu.menu.length;
    if (currentIndex === 0) {
      //@ts-ignore
      setCurrentIndex(totalLength - 1);
      const newUrl = menu.menu[totalLength - 1].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex - 1;
    const newUrl = menu.menu.filter((item) => {
      return menu.menu.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    //@ts-ignore
    setCurrentIndex(newIndex);
  };

  return (
    <Wrapper>
      {menu.menu.map((item, index) => (
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
