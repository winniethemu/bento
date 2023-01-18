import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

import { colors } from '../../const';
import { SelectProps } from './Select';
import { themeGradient } from '../../util';

const Wrapper = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FCF5F5;
  border: 1px solid ${colors.neutral[500]};
  border-radius: 12px;
  padding: 4px 6px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  min-width: 200px;
  text-align: left;
  font-size: 16px;
  padding-left: 6px;
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  border-radius: 8px;
  background: ${themeGradient(180, colors.theme.radiant.coral, colors.theme.radiant.pink)};
`;

const Menu = styled.div`
`;

export const NativeSelect = (props: SelectProps) => {
  // should contain a <input value={value}>
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Button onClick={handleToggle}>
        <ButtonText>Medium</ButtonText>
        <ButtonIcon>
          <FaAngleDown size={20} />
        </ButtonIcon>
      </Button>
      {open && (
        <Menu>
          <ol>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ol>
        </Menu>
      )}
    </Wrapper>
  );
};