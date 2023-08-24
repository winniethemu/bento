import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  border: 1px solid red;
`;

export const Scroller = styled.div<{ position: number; size: number }>`
  display: flex;
  transform: translate(-${(props) => props.position * props.size}px);
  transition: transform 0.4s ease-out;
`;

export const ImageContainer = styled.div<{ width: number; height: number }>`
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  background-color: transparent;
  transition: background-color 0.2s ease-in;
  ${(props) => (props.next ? 'right: 0' : 'left: 0')};

  svg {
    color: #ccc;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(238, 238, 238, 0.5);
  }
`;
