import React, { useState } from 'react';
import styled from 'styled-components';
import { HiSelector } from 'react-icons/hi';

import { colors } from '../../const';
import { Option, SelectProps } from './Select';

interface Props {
  key: string;
  open: boolean;
  selected: boolean;
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.ol<Pick<Props, 'open'>>`
  box-sizing: border-box;
  background-color: #FCF5F5;
  border: 1px solid ${colors.neutral[100]};
  border-radius: 6px;
  list-style: none;
  padding: 4px 6px;
  margin: 0;
  overflow: auto;
  max-height: ${props => props.open ? '480px' : '42px'};
  transition: max-height 0.25s ease-in;
`;

const MenuItem = styled.li<Props>`
  border-radius: 6px;
  font-size: 16px;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  line-height: 32px;
  min-width: 200px;
  padding-left: 6px;
  text-align: left;

  &:hover {
    background-color: ${props => props.open ? colors.neutral[100] : ''};
  }
`;

const MenuIcon = styled.span`
  display: flex;
  position: absolute;
  height: 32px;
  align-items: center;
  right: 6px;
  top: 5px;
  color: ${colors.theme.radiant.coral};
`;

const validKeys = [' ', 'ArrowDown', 'ArrowUp', 'Enter', 'Escape'];

export const NativeSelect = (props: SelectProps) => {
  const { options, name } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (val: Option['value']) => {
    setValue(val);
  }

  const handleKeyOpen = (event: React.KeyboardEvent) => {
    if (validKeys.indexOf(event.key) < 0) return;
    if (event.key === 'Escape') return;
    if (!open) {
      //TODO: set focus
      setOpen(true);
    }
  };

  const handleKeySelect = (event: React.KeyboardEvent, index: number) => {
    if (!open || validKeys.indexOf(event.key) < 0) return;

    switch(event.key) {
      case 'ArrowUp':
        break;
      case 'ArrowDown':
        break;
      case ' ':
      case 'Enter':
        setValue(options[index].value);
      default:
        setOpen(false);
    }
  };

  return (
    <Wrapper onClick={handleToggle}>
      <Menu open={open} tabIndex={0} onKeyDown={handleKeyOpen}>
        {options.map((option, index) => {
          return (open || option.value === value) ?
            <MenuItem
              key={option.value as string}
              open={open}
              onClick={() => handleSelect(option.value)}
              onKeyDown={(e) => handleKeySelect(e, index)}
              selected={option.value === value}
            >
              {option.label}
            </MenuItem> : null;
        })}
      </Menu>
      {!open && <MenuIcon><HiSelector size={26} /></MenuIcon>}
      <input type="hidden" name={name} value={value.toString()} />
    </Wrapper>
  );
};