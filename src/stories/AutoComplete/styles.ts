import styled from 'styled-components';

import { colors } from '../../const';

export const Wrapper = styled.div`
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid ${colors.neutral[200]};

  &:focus {
    border-color: #1677ff;
    outline: 2px solid rgba(209, 209, 214, 0.5);
  }
`;

export const SuggestionList = styled.ul`
  border-radius: 4px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin: 5px 0 0 0;
  padding: 6px;
`;

export const Suggestion = styled.li`
  list-style: none;
  padding: 6px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.neutral[50]};
  }
`;
