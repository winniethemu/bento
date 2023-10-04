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
  const [indices, setIndices] = React.useState([images.length - 1, 0, 1]);

  function handlePrevClick() {
    const next = indices.slice();
    const incoming = (indices[0] - 1 + images.length) % images.length;
    next.unshift(incoming);
    next.pop();
    setIndices(next);
  }

  function handleNextClick() {
    const next = indices.slice();
    const incoming = (indices[2] + 1) % images.length;
    next.push(incoming);
    next.shift();
    setIndices(next);
  }

  return (
    <Wrapper width={width} height={height}>
      <Scroller size={width}>
        {indices.map((index) => {
          const { src, alt } = images[index];
          return (
            <ImageContainer key={src} width={width} height={height}>
              <img src={src} alt={alt} />
            </ImageContainer>
          );
        })}
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
