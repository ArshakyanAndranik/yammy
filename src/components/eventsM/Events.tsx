import styled from "styled-components";
import {
  accentColors,
  Container,
  defaultt,
  events1SVG,
  events2SVG,
  events3SVG,
  primary,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";

const Section = styled.section``;




const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 30px;
  h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #7f7f90;
    text-transform: uppercase;
    font-family: ${defaultt};
  }
  p {
    margin: 0;
    font-size: 48px;
    font-weight: 400;
    font-family: ${primary};
    span {
      color: ${accentColors.primary};
    }
  }
`;
const Description = styled.p`
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
`;
const Slides = styled.div``;
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
    color: #fff;
    position: relative;
  }
  @media (max-width: 575px) {
    min-height: 500px;
  }
`;
const Price = styled.div`
  color: #fff;
  border-bottom: 2px solid ${accentColors.primary};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
  align-self: flex-start !important;
`;

const Events = () => {
  return (
    <Section id="events">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Events</h2>
          <p>
            Share <span>Your Moments</span> In Our Restaurant
          </p>
        </SectionHeader>
        <Slides data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
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
        </Slides>
      </Container>
    </Section>
  );
};

export default Events;
