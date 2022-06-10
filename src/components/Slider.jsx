import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";

import { Link } from "react-router-dom";

import { sliderItems } from "../Data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /*  100vh  means full screen */
  display: flex;

  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && " 10px"};
  right: ${(props) => props.direction === "right" && " 10px"};
  //  props is the best component in the styled component
  margin: auto;
  cursor: pointer;
  opacity: 5;
  // opacity means transparency making it look light than its original form.
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  /*  It transform the image to right  or to left with its transform translate value . Color transform on its own with its translateX vw 
  in the site, */
`;

// ------- slide animation -------- ///

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  /*  This is 100% because its parent Slide is 100vh */
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
 


const Slider = () => {
  const handelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handelClick("left")}>
        {/*  Indicating direction with ("left") */}
        <ArrowLeftOutlinedIcon />
      </Arrow>
      
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            {/* This item.bg come from props of bg */}
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products">
                <Button>START SHOPPING NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handelClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
