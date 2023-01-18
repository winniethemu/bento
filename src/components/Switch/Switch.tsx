import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../const';
import { compact, themeGradient } from '../../util';

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  labelPosition?: 'before' | 'after';
  name?: string;
  on?: boolean;
  onChange?: () => void;
  showLabel?: boolean;
}

const Wrapper = styled.span`
  display: flex;
  align-items: center;
`;

const Container = styled.span`
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
  background: ${
    props => props.on ?
      themeGradient(180, colors.theme.radiant.coral, colors.theme.radiant.pink) :
      colors.theme.radiant.darkred
  };
`;

const ControlWithStatus = styled.span<Pick<SwitchProps, 'on'>>`
  display: flex;
  position: absolute;
  width: 100%;
  top: -1px;
  left: -1px;
  transform: ${props => props.on ? 'translate(50%)' : 'none'};
  transition: transform 0.25s ease-out;
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

const Label = styled.label`
  padding: 0 1rem;
`;

export const Switch = (props: SwitchProps) => {
  const { label, labelPosition = 'before', showLabel = true, name, on, onChange } = props;
  const [isOn, setIsOn] = useState(!!on);

  const inputProps = compact({
    name,
    value: isOn.toString(),
  });

  const handleClick = () => {
    const value = !isOn;
    setIsOn(value);
    onChange && onChange();
  }

  return (
    <Wrapper>
      {showLabel && labelPosition === 'before' && (
        <Label>{label}</Label>
      )}
      <Container onClick={handleClick}>
        <Base on={isOn} />
        <ControlWithStatus on={isOn}>
          <Control on={isOn} />
          <Status />
        </ControlWithStatus>
        <CheckboxInput type="checkbox" {...inputProps} />
      </Container>
      {showLabel && labelPosition === 'after' && (
        <Label>{label}</Label>
      )}
    </Wrapper>
  );
};
