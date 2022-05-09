import { useEffect } from 'react';

export const useOutsideClick = (ref: any, fn: any) => {
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      fn();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}