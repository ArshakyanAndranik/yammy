import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import FocusLock from 'react-focus-lock';
import ReactPlayer from 'react-player';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import { accentColors } from '../../assets';

const StyledModal = Modal.styled`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props: any) => props.opacity};
  transition : all 0.3s ease-in-out;
  `;
const BtnPlay = styled.a`
  z-index: 1222;
  display: flex !important;
  align-items: center;
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: rgba(255, 255, 255, 0.7); //watch video
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
  z-index: 13223323233232;
  height: 32px;
  width: 32px;
  color: ${accentColors.primary};
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

function ModalVideo() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e: any) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BtnPlay onClick={toggleModal}>
        {' '}
        <Play />
        <span>Watch Video</span>
      </BtnPlay>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        //@ts-ignore
        role='dialog'
        aria-modal={true}
        aria-labelledby='modal-label'
      >
        <FocusLock>
          <XIcon onClick={toggleModal} />
          <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </FocusLock>
      </StyledModal>
    </>
  );
}

export default ModalVideo;
