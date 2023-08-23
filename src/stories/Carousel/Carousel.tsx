import React from 'react';

import { Image, Wrapper } from './styles';

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
  const { images } = props;

  return (
    <Wrapper>
      {images.map(({ src, alt }) => (
        <Image key={src} src={src} alt={alt} />
      ))}
    </Wrapper>
  );
};
