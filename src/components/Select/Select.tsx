import React from 'react';
import styled from 'styled-components';

import { useMobile } from '../../hook';

interface Option {
  label: string;
  value: string | number | boolean;
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const NativeSelect = (props: SelectProps) => {
  return null;
};

export const Select = (props: SelectProps) => {
  const isMobile = useMobile();
  return (
    <React.Fragment>
      {/* isMobile && <MobileSelect /> */}
      {!isMobile && <NativeSelect {...props} />}
    </React.Fragment>
  );
};
