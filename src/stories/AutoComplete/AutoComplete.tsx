import React from 'react';

import { Input, Suggestion, SuggestionList, Wrapper } from './styles';

interface AutoCompleteProps {
  options: string[];
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: string) => void;
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

    const results = options.filter((option) => {
      option = option.toLowerCase();
      return option.startsWith(value.toLowerCase());
    });
    setDisplayedOptions(results);

    onChange && onChange(value);
    onSearch && onSearch(value);
  }

  function handleSelect(option: string) {
    setValue(option);
    onChange && onChange(option);
    onSelect && onSelect(option);
  }

  return (
    <Wrapper {...props}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {value && (
        <SuggestionList>
          {displayedOptions.map((option) => (
            <Suggestion key={option} onClick={() => handleSelect(option)}>
              {option}
            </Suggestion>
          ))}
        </SuggestionList>
      )}
    </Wrapper>
  );
};
