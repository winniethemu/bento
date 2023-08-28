import React from 'react';

import './ProgressBar.css';

interface ProgressBarProps {
  value: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { value } = props;

  const label = value > 10 ? `${value}%` : '';
  const progressStyle = {
    display: 'flex',
    width: `${value}%`,
    height: '100%',
    backgroundColor: '#0d6efd',
    borderRadius: 5,
    color: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <span className="wrapper">
      <span className="progress" style={progressStyle}>
        {label}
      </span>
    </span>
  );
};
