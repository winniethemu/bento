import React, { useState } from 'react';
import styled from 'styled-components';
import { HiSelector } from 'react-icons/hi';

import { colors } from '../../const';
import { SelectProps } from './Select';
import { themeGradient } from '../../util';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.ol<{ open: boolean }>`
  box-sizing: border-box;
  background-color: #FCF5F5;
  border: 1px solid ${colors.neutral[500]};
  border-radius: 6px;
  list-style: none;
  padding: 4px 6px;
  margin: 0;
  overflow: auto;
  max-height: ${props => props.open ? '480px' : '42px'};
  transition: max-height 0.25s ease-in;
`;

const MenuItem = styled.li<{ key: string }>`
  min-width: 200px;
  text-align: left;
  font-size: 16px;
  line-height: 32px;
  padding-left: 6px;
`;

const Icon = styled.span`
  display: flex;
  position: absolute;
  width: 34px;
  height: 32px;
  align-items: center;
  background: ${themeGradient(180, colors.theme.radiant.coral, colors.theme.radiant.pink)};
  border-radius: 6px;
  color: white;
  justify-content: center;
  right: 6px;
  top: 5px;
`;

export const NativeSelect = (props: SelectProps) => {
  const { options, name } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const handleToggle = () => {
    setOpen(!open);
  };

  // should contain a <input value={value}>
  return (
    <Wrapper onClick={handleToggle}>
      <Menu open={open}>
        {options.map((option) => {
          return (open || option.value === value) ?
            <MenuItem key={option.value as string}>{option.label}</MenuItem> :
            null;
        })}
      </Menu>
      {!open && <Icon><HiSelector size={26} /></Icon>}
    </Wrapper>
  );
};