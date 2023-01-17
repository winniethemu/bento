import React from 'react';
import styled from 'styled-components';
import { colors } from '../../const';

interface Option {
  label: string;
  value: string | number | boolean;
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const Wrapper = styled.button`
  background: ${colors.neutral[600]};
  border: none;
  border-radius: 8px;
`;

export const Select = (props: SelectProps) => {
  return (
    <Wrapper>
      Medium
    </Wrapper>
  );
};
