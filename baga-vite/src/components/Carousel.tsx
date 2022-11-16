import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { imageInfo } from "../helpers/imageInfo";

function CarouselContent(props: { content: { src: string; alt: string; caption: string; text: string } }) {
  return (
    <>
      <Image className="d-block w-100 carouselImage" src={props.content.src} alt={props.content.alt}></Image>
      <Carousel.Caption>
        <h3 className="text-capitalize">{props.content.caption}</h3>
        <p>{props.content.text}</p>
      </Carousel.Caption>
    </>
  );
}

function CarouselDiv() {
  const [index, setIndex] = useState(0);

  function handleChange(currIndex: number, event: any) {
    setIndex(currIndex);
  }

  return (
    <div className="carousel-wrapper ">
      <Container>
        <Carousel activeIndex={index} onSelect={handleChange} keyboard={true} pause={"hover"} touch={true}>
          {imageInfo.map((element, i) => {
            return (
              <Carousel.Item key={i}>
                <CarouselContent content={element} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default CarouselDiv;
