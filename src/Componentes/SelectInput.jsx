function SelectInput({ value, onChange, items }) {
  return (
    <select value={value || ""} onChange={onChange}>
      {value === "" && (
        <option value="" disabled>
          Selecione uma opção
        </option>
      )}
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
