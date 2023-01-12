import React from 'react';

interface Option {
  label: string;
  value: string | number | boolean;
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const Select = (props: SelectProps) => {
  return (
    <select>
      {props.options.map((option) => {
        return (
          <option key={option.label} value={option.value?.toString()}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
