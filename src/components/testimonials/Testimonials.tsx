import styled from "styled-components";
import { accentColors, defaultt, primary, QuoteSvg, secondary, StarSvg, testimonials1SVG, testimonials2SVG, testimonials3SVG, testimonials4SVG } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";

const Section = styled.section`
  background-color: #eee;
`;
const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
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
const InnerDiv = styled.div`
  border-left: 3px solid ${accentColors.primary};
  padding-left: 30px;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: ${accentColors.default};
    font-family: ${secondary};
  }
  h4 {
    font-size: 14px;
    color: #6c757d;
    margin: 0 0 10px 0;
    font-family: ${secondary};
  }
  p {
    font-style: italic;
  }
`;
const JustifyDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexDiv = styled.div`
  flex: 0 0 auto;
  width: 50%;
`;
const ImageDiv = styled.div`
  align-items: center;
  flex: 0 0 auto;
  width: 16.66666667%;
  img {
    max-width: 100%;
    width: 150px;
    height: 150px;
    height: auto;
    border-radius: 50%;
    border: 4px solid #fff;
    margin: 0 auto;
  }
`;

const Testimonials = () => {
  return (
    <Section>
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>Testimonials</h2>
          <p>
            What Are They <span>Saying About Us</span>
          </p>
        </SectionHeader>

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
          <div data-aos="fade-up" data-aos-delay="100">
            <div>
              <SwiperSlide>
                <JustifyDiv>
                  <FlexDiv>
                    <InnerDiv>
                      <p>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div>
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                      </div>
                    </InnerDiv>
                  </FlexDiv>
                  <ImageDiv>
                    <img src={testimonials1SVG} />
                  </ImageDiv>
                </JustifyDiv>
              </SwiperSlide>

              <SwiperSlide>
                <JustifyDiv>
                  <FlexDiv>
                    <InnerDiv>
                      <p>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div>
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                      </div>
                    </InnerDiv>
                  </FlexDiv>
                  <ImageDiv>
                    <img src={testimonials2SVG} />
                  </ImageDiv>
                </JustifyDiv>
              </SwiperSlide>


              <SwiperSlide>
                <JustifyDiv>
                  <FlexDiv>
                    <InnerDiv>
                      <p>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div>
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                      </div>
                    </InnerDiv>
                  </FlexDiv>
                  <ImageDiv>
                    <img src={testimonials3SVG} />
                  </ImageDiv>
                </JustifyDiv>
              </SwiperSlide>

              
              <SwiperSlide>
                <JustifyDiv>
                  <FlexDiv>
                    <InnerDiv>
                      <p>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                      </p>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div>
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                        <img src={StarSvg} />
                      </div>
                    </InnerDiv>
                  </FlexDiv>
                  <ImageDiv>
                    <img src={testimonials4SVG} />
                  </ImageDiv>
                </JustifyDiv>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Testimonials;
