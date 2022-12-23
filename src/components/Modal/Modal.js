import styled from "styled-components";
import { LeftSVG, RightSVG, XSVG } from "../../assets";


const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: 0px auto;
  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 80%;
  }
  @media (max-width: 390px) {
    max-width: 60%;
    max-height: 60%;
  }
`;

const OverlayLeft = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.32);
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-left: 10px;
  left: 0;
  z-index: 999;
  svg {
    width: 50px;
    height: 50px;

  }
`;
const OverlayRight = styled.div`
  display: flex;
  background-color: #6d6d6d;
  justify-content: space-between;
  position: absolute;
  right: 0;
  border-radius: 5px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  top: 50%;
  z-index: 999;
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
  > span {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #000000;
    z-index: 999;
    cursor: pointer;
  }
  .dismiss {
    display: block;
    z-index: 999999999999;
    color: #000000;
  }
`;

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <Overlay className="dismiss" onClick={handleClick}>
        <Image src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}></span>
        <OverlayLeft onClick={handelRotationLeft}>
          <div>
            <img src={LeftSVG} />
          </div>
        </OverlayLeft>
        <OverlayRight onClick={handelRotationRight}>
          <div>
            <img src={RightSVG} />
          </div>
        </OverlayRight>
      </Overlay>
    </>
  );
};

export default Modal;
