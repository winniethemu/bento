import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
`;

export const Scroller = styled.div<{ position: number; size: number }>`
  display: flex;
  transform: translate(-${(props) => props.position * props.size}px);
`;

export const ImageContainer = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  img {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    object-fit: contain;
  }
`;

export const NavButton = styled.div<{ next: boolean }>`
  position: absolute;
  height: 100%;
  width: 50px;
  ${(props) => (props.next ? 'right: 0' : 'left: 0')};
`;
