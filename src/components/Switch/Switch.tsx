import React, { useState } from 'react';
import styled from 'styled-components';

import { compact } from '../../util';

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  on: boolean;
  name?: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const CheckboxInput = styled.input`
  display: none;
`;

export const Switch = (props: SwitchProps) => {
  const { name, on } = props;
  const [isOn, setIsOn] = useState(on);

  const inputProps = compact({
    name,
    value: isOn.toString(),
  });

  return (
    <Wrapper>
      <CheckboxInput type="checkbox" {...inputProps} />
    </Wrapper>
  );
};
