import React from 'react';

import { ImageContainer, Wrapper } from './styles';

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

/**
 * 1. Virtualization
 * 2. Scroll snapping
 */
export const Carousel = (props: CarouselProps) => {
  const { images, width, height } = props;
  const [index, setIndex] = React.useState(0);

  return (
    <Wrapper width={width} height={height}>
      {images.map(({ src, alt }) => (
        <ImageContainer key={src} width={width} height={height}>
          <img src={src} alt={alt} />
        </ImageContainer>
      ))}
    </Wrapper>
  );
};
