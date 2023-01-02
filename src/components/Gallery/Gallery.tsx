import styled from "styled-components";
import IndexGallery from ".";
import { Container, Gallery1SVG, Gallery2SVG, Gallery3SVG, Gallery4SVG, Gallery5SVG, Gallery6SVG, Gallery7SVG, Gallery8SVG, SectionHeader, size } from "../../assets";

const GallerySection = styled.section`
  overflow: hidden;
  background-color: #eee;
`;
const GallerySlider = styled.div`
/* display: flex; */
align-items: center;
  ${size.L} {
    padding: 40px 0;
  }
`;

const SliderDiv = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
`;
const Gallery = () => {
  return (
    <GallerySection id="gallery">
      <Container data-aos="fade-up">
        <SectionHeader>
          <h2>gallery</h2>
          <p>
            Check <span>Our Gallery</span>
          </p>
        </SectionHeader>
      </Container>
      <IndexGallery/>
    </GallerySection>
  ); 
};

export default Gallery;
