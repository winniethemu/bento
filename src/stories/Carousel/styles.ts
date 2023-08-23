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

export const ImageContainer = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  img {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    object-fit: contain;
  }
`;
