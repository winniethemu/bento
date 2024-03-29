import React, { useEffect, useState, useRef } from 'react';
import findIndex from 'lodash/findIndex';
import styled from 'styled-components';
import { HiSelector } from 'react-icons/hi';

import { colors } from '../../const';
import { Option, SelectProps } from './Select';

interface MenuItemProps {
  data: Option;
  focus: boolean;
  handleSelect: (v: Option['value']) => void;
  open: boolean;
  selected: boolean;
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledMenu = styled.ol<{ open: boolean }>`
  box-sizing: border-box;
  background-color: #fcf5f5;
  border: 1px solid ${colors.neutral[100]};
  border-radius: 4px;
  list-style: none;
  padding: 6px 4px;
  margin: 0;
  overflow: auto;
  max-height: ${(props) => (props.open ? '480px' : '42px')};
  transition: max-height 0.25s ease-in;
`;

const StyledMenuItem = styled.li<{
  focus: boolean;
  open: boolean;
  selected: boolean;
}>`
  border-radius: 4px;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  line-light: 1.3rem;
  min-width: 160px;
  padding: 4px 6px;
  text-align: left;
  background-color: ${(props) => (props.focus ? colors.neutral[100] : '')};

  &:hover {
    background-color: ${(props) => (props.open ? colors.neutral[100] : '')};
  }
`;

const StyledMenuIcon = styled.span`
  display: flex;
  position: absolute;
  height: 32px;
  align-items: center;
  right: 6px;
  top: 5px;
  color: ${colors.radiant.coral};
`;

const validKeys = [' ', 'ArrowDown', 'ArrowUp', 'Enter', 'Escape'];

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { data, focus, handleSelect, open, selected } = props;
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (focus) ref.current?.focus();
  }, [focus]);

  return (
    <StyledMenuItem
      focus={open && focus}
      open={open}
      onClick={() => handleSelect(data.value)}
      selected={selected}
      ref={ref}
      tabIndex={focus ? 0 : -1}
    >
      {data.label}
    </StyledMenuItem>
  );
};

export const NativeSelect: React.FC<SelectProps> = (props: SelectProps) => {
  const { options, name } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);
  const [focusIndex, setFocusIndex] = useState(-1);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (val: Option['value']) => {
    setValue(val);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (validKeys.indexOf(event.key) < 0) return;
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (!open) {
      const index = findIndex(options, (option) => option.value === value);
      setFocusIndex(index);
      setOpen(true);
      return;
    }

    switch (event.key) {
      case 'ArrowUp': {
        const next = focusIndex - 1;
        if (next < 0) {
          setFocusIndex(options.length - 1);
        } else {
          setFocusIndex(next);
        }
        break;
      }
      case 'ArrowDown': {
        setFocusIndex((focusIndex + 1) % options.length);
        break;
      }
      case ' ':
      case 'Enter': {
        setValue(options[focusIndex].value);
        setOpen(false);
        break;
      }
      default: {
        setOpen(false);
      }
    }
  };

  return (
    <Wrapper onClick={handleToggle}>
      <StyledMenu open={open} tabIndex={0} onKeyDown={handleKeyDown}>
        {options.map((option, index) => {
          return open || option.value === value ? (
            <MenuItem
              data={option}
              focus={focusIndex === index}
              key={option.value as string}
              handleSelect={handleSelect}
              open={open}
              selected={option.value === value}
            />
          ) : null;
        })}
      </StyledMenu>
      {!open && (
        <StyledMenuIcon>
          <HiSelector size={26} />
        </StyledMenuIcon>
      )}
      <input type="hidden" name={name} value={value.toString()} />
    </Wrapper>
  );
};
