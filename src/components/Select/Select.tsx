import React from 'react';
import styled from 'styled-components';

import { useMobile } from '../../hook';
import { NativeSelect } from './NativeSelect';

interface Option {
  label: string;
  value: string | number | boolean;
}

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  name?: string;
}

export const Select = (props: SelectProps) => {
  const isMobile = useMobile();
  return (
    <React.Fragment>
      {/* isMobile && <MobileSelect /> */}
      {!isMobile && <NativeSelect {...props} />}
    </React.Fragment>
  );
};
