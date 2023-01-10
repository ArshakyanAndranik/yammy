import React, { useState } from "react";
import styled from "styled-components";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";


import gallery from "../../data/images.json";
import Modal from "../modal/Modal";
import { accentColors } from "../../assets";

const Wrapper = styled.div`
  display: flex;
  height: 200px;
  margin-left: 70px;
  margin-right: 70px;
  .swiper-pagination {
    z-index: 2000000;
    margin-top: -9px;
    position: relative;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #d1d1d7;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: ${accentColors.primary};
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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {gallery.gallery.map((item, index) => (
          <div key={index} className="wrapper-images">
            <div>
              <SwiperSlide>
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={item.link}
                  onClick={() => handleClick(item, index)}
                />
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>
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
