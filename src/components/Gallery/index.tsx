import React, { useState } from "react";
import styled from "styled-components";
import { accentColors, secondary } from "../../assets";

import gallery from "../../data/images.json";
import Modal from "../modal/Modal";

const Wrapper = styled.div`
display: flex;

  /* @media (max-width: 390px) {
    padding: 0px 0px;
  } */

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
  img {
    max-width: 100%;
    height: auto;
  }
`;
function IndexGallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  //@ts-ignore
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = gallery.gallery.length;
    //@ts-ignore
    if (currentIndex + 1 >= totalLength) {
      //@ts-ignore
      setCurrentIndex(0);
      const newUrl = gallery.gallery[0].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex + 1;
    const newUrl = gallery.gallery.filter((item) => {
      return gallery.gallery.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = gallery.gallery.length;
    if (currentIndex === 0) {
      //@ts-ignore
      setCurrentIndex(totalLength - 1);
      const newUrl = gallery.gallery[totalLength - 1].link;
      //@ts-ignore
      setClickedImg(newUrl);
      return;
    }
    //@ts-ignore
    const newIndex = currentIndex - 1;
    const newUrl = gallery.gallery.filter((item) => {
      return gallery.gallery.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    //@ts-ignore
    setClickedImg(newItem);
    //@ts-ignore
    setCurrentIndex(newIndex);
  };

  return (
    <Wrapper>
      
      {gallery.gallery.map((item, index) => (
        <div key={index} className="wrapper-images">
          <MenuItem>
            <img src={item.link} onClick={() => handleClick(item, index)} />
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

export default IndexGallery;
