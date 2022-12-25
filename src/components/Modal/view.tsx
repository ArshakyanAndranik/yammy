import React, { useState } from "react";
import Modal from "styled-react-modal";
import FocusLock from "react-focus-lock";
import ReactPlayer from "react-player";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { accentColors, PlayCircleSVG } from "../../assets";

const StyledModal = Modal.styled`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props: any) => props.opacity};
  transition : all 0.3s ease-in-out;
  `;
const BtnPlay = styled.a`
  z-index: 1;
  display: flex !important;
  align-items: center;
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: rgba(255, 0, 0, 0.7);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #fff;
  }
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;
const Play = styled(AiOutlinePlayCircle)`
  z-index: 999991;
  height: 32px;
  width: 32px;
  color: red;
  margin-right: 5px;
  :hover {
    color: #82cbed;
  }
`;

const XIcon = styled(IoMdClose)`
  position: absolute;
  top: -7%;
  right: -4%;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
const Btn2 = styled.a`
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  margin-top: 10px;
  color: ${accentColors.secondary};
  font-weight: 600;
`;
const ImgSvg = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 390px) {
    max-width: 90%;
    margin-left: 20px;
  }
`;
function ModalVideo() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BtnPlay onClick={() => toggleModal()}>
        {" "}
        <Btn2>
          <ImgSvg style={{ marginBottom: "-10px" }} src={PlayCircleSVG} />
          <span style={{ marginLeft: "10px" }}>Watch Video</span>
        </Btn2>
      </BtnPlay>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={() => toggleModal()}
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
          <XIcon onClick={() => toggleModal()} />
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </FocusLock>
      </StyledModal>
    </>
  );
}

export default ModalVideo;
