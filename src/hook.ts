import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const update = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', debounce(update, 250));
    return (): void => window.removeEventListener('resize', update);
  }, []);

  return isMobile;
};
