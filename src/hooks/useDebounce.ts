/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useMemo, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any) => void,
  delayMS: number,
) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timer: number;

  const debounce = (
    func: (...args: any) => void,
    delayMS: number,
    ...args: any[]
  ) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delayMS);
  };

  return useMemo(
    () =>
      (...args: any) =>
        debounce(callbackRef.current, delayMS, ...args),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delayMS],
  );
};
