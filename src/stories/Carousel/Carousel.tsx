import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

import { ImageContainer, NavButton, Scroller, Wrapper } from './styles';

interface CarouselProps {
  images: Array<Image>;
  height: number;
  width: number;
  autoplay?: boolean;
  // delay between transitions, only needed when `autoplay` is enabled
  delay?: number;
  loop?: boolean;
  onLoad?: () => void;
  onNextClick?: () => void;
  onPageSelect?: () => void;
  onPrevClick?: () => void;
  transitionDuration?: number;
}

interface Image {
  src: string;
  alt?: string;
}

export const Carousel = (props: CarouselProps) => {
  const { images, width, height } = props;
  const [index, setIndex] = React.useState(0);

  function handlePrevClick() {
    const nextIndex = (index - 1 + images.length) % images.length;
    setIndex(nextIndex);
  }

  function handleNextClick() {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
  }

  return (
    <Wrapper width={width} height={height}>
      <Scroller position={index} size={width}>
        {images.map(({ src, alt }) => (
          <ImageContainer key={src} width={width} height={height}>
            <img src={src} alt={alt} />
          </ImageContainer>
        ))}
      </Scroller>
      <NavButton next={false} onClick={handlePrevClick}>
        <GoChevronLeft size={36} />
      </NavButton>
      <NavButton next={true} onClick={handleNextClick}>
        <GoChevronRight size={36} />
      </NavButton>
    </Wrapper>
  );
};
