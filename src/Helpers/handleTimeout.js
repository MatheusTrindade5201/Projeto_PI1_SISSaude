let timeoutId = null;

export const clearCurrentTimeOut = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
};

export const nullifyTimeOut = () => {
  timeoutId = null;
};

export const setCurrentTimeout = (timeout) => {
  timeoutId = timeout;
};

let intervalId = null;

export const clearCurrentInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

export const nullifyInterval = () => {
  intervalId = null;
};

export const setCurrentInterval = (interval) => {
  intervalId = interval;
};
