import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../const';
import { compact } from '../../util';

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  on?: boolean;
  name?: string;
}

const Wrapper = styled.span`
  display: flex;
  position: relative;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
`;

const Base = styled.span<Pick<SwitchProps, 'on'>>`
  width: 48px;
  height: 24px;
  border-radius: 24px;
  background-color: ${
    props => props.on ? colors.radiant.light : colors.radiant.dark
  };
`;

const ControlWithStatus = styled.span<Pick<SwitchProps, 'on'>>`
  display: flex;
  position: absolute;
  width: 100%;
  top: -1px;
  left: -1px;
  transform: ${props => props.on ? 'translate(50%)' : 'none'};
  justify-content: space-between;
  align-items: center;
`;

const Control = styled.span<Pick<SwitchProps, 'on'>>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${props => props.on ? '#FFF' : '#EEE'};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
`;

const Status = styled.span`
  color: #EEE;
  content: 'O';
`;

const CheckboxInput = styled.input`
  display: none;
`;

export const Switch = (props: SwitchProps) => {
  const { label, name, on } = props;
  const [isOn, setIsOn] = useState(on || false);

  const inputProps = compact({
    name,
    value: isOn.toString(),
  });

  const handleClick = () => {
    setIsOn(!isOn);
  }

  return (
    <Wrapper onClick={handleClick}>
      <Base on={isOn} />
      <ControlWithStatus on={isOn}>
        <Control on={isOn} />
        <Status />
      </ControlWithStatus>
      <CheckboxInput type="checkbox" {...inputProps} />
    </Wrapper>
  );
};
