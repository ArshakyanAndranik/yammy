import styled from "styled-components";
import IndexGallery from ".";

import { Container, SectionHeader } from "../../assets";

const GallerySection = styled.section`
  overflow: hidden;
  background-color: #eee;
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
