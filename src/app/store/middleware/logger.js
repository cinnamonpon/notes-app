/* eslint-disable no-console */
const logger = () => (next) => (action = {}) => {
  console.group(action.type);
  const returnValue = next(action);
  console.groupEnd();
  return returnValue;
};

export default logger;
