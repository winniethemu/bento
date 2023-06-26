import React from 'react';

import { Option } from './type';

interface AutoCompleteProps {
  options: Option[];
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: Option['value'], option?: Option) => void;
  placeholder?: string;
  status?: 'success' | 'warning' | 'error';
}

export const AutoComplete = ({
  options,
  onChange,
  onSearch,
  onSelect,
  placeholder,
  status,
  ...props
}: AutoCompleteProps) => {
  const [value, setValue] = React.useState('');
  const [displayedOptions, setDisplayedOptions] = React.useState(options);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);

    const results = options.filter((option) => option.label.startsWith(value));
    setDisplayedOptions(results);

    onChange && onChange(value);
    onSearch && onSearch(value);
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {value && (
        <ul>
          {displayedOptions.map(({ label, value }) => (
            <li key={String(value)}>{label}</li>
          ))}
        </ul>
      )}
    </>
  );
};
