export const handleDataChange = (
  state,
  setState,
  valueKey,
  value,
  index = null,
  nestedKey = null
) => {
  if (index !== null && nestedKey) {
    const updatedArray = [...state[valueKey]];
    updatedArray[index] = {
      ...updatedArray[index],
      [nestedKey]: value,
    };
    setState({ ...state, [valueKey]: updatedArray });
  } else {
    setState({ ...state, [valueKey]: value });
  }
};
