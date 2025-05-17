function SelectInput({ value, onChange, items, className }) {
  return (
    <select value={value} onChange={onChange} className={className}>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectInput