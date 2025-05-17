function SelectInput({ value, onChange, items, className }) {
  return (
    <select value={value || ""} onChange={onChange} className={className}>
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
