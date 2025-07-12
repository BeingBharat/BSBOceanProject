import {useEffect, useRef, useState} from 'react';

export function timerHook(initialTimer=0) {
  const [timer, setTimer] = useState(initialTimer);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);

      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(initialTimer);
  };

  return {timer, startTimer, stopTimer, resetTimer};
}
