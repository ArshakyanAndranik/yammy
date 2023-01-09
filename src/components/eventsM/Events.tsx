import styled from "styled-components";
import {
  accentColors,
  events1SVG,
  events2SVG,
  events3SVG,
  SectionHeader,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";

const Container = styled.div`
  padding: 0;
  .swiper-pagination {
    margin-top: 20px;
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

const Description = styled.p`
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
`;
const SwiperR = styled.div`
  display: flex;
`;
const SwiperSlide1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  padding: 30px;
  background-image: url(${events1SVG});
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
    position: relative;
  }
  @media (max-width: 575px) {
    min-height: 500px;
  }
  :before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
  }
`;
const SwiperSlid2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  padding: 30px;
  background-image: url(${events2SVG});
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
    position: relative;
  }
  @media (max-width: 575px) {
    min-height: 500px;
  }
  :before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
  }
`;
const SwiperSlide3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  padding: 30px;
  background-image: url(${events3SVG});
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
    color: ${accentColors.white};
    position: relative;
  }
  @media (max-width: 575px) {
    min-height: 500px;
  }
  :before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    inset: 0;
  }
`;
const Price = styled.div`
  color: ${accentColors.white};
  border-bottom: 2px solid ${accentColors.primary};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
  align-self: flex-start !important;
`;
const Events = () => {
  return (
    <section id="events">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Events</h2>
          <p>
            Share <span>Your Moments</span> In Our Restaurant
          </p>
        </SectionHeader>
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperR>
              <SwiperSlide>
                <SwiperSlide1>
                  <h3>Custom Parties</h3>
                  <Price>$99</Price>
                  <Description>
                    Quo corporis voluptas ea ad. Consectetur inventore sapiente
                    ipsum voluptas eos omnis facere. Enim facilis veritatis id
                    est rem repudiandae nulla expedita quas.
                  </Description>
                </SwiperSlide1>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlid2>
                  <h3>Private Parties</h3>
                  <Price>$289</Price>
                  <Description>
                    In delectus sint qui et enim. Et ab repudiandae inventore
                    quaerat doloribus. Facere nemo vero est ut dolores ea
                    assumenda et. Delectus saepe accusamus aspernatur.
                  </Description>
                </SwiperSlid2>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide3>
                  <h3>Birthday Parties</h3>
                  <Price>$499</Price>
                  <Description>
                    Laborum aperiam atque omnis minus omnis est qui assumenda
                    quos. Quis id sit quibusdam. Esse quisquam ducimus officia
                    ipsum ut quibusdam maxime. Non enim perspiciatis.
                  </Description>
                </SwiperSlide3>
              </SwiperSlide>
            </SwiperR>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Events;
