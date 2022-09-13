import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
function HeroCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image
            
            className="d-block w-100"
            src="/images/hero.png"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/hero2.png"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/hero3.png"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
