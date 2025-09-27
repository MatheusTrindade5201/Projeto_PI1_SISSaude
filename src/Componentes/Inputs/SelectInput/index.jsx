import "../../../styles/styleInput.css";

function SelectInput({
  id,
  label,
  value,
  onChange,
  items,
  placeholder = "Selecione uma opção",
  error = "",
  className = "",
}) {
  const hasError = Boolean(error);
  const errorId = hasError ? `${id}-error` : undefined;

  return (
    <div className={`select-input ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        value={value || ""}
        onChange={onChange}
        aria-describedby={errorId}
        aria-invalid={hasError}
        className={hasError ? "error" : ""}
      >
        {value === "" && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {hasError && (
        <span id={errorId} className="error">
          {error}
        </span>
      )}
    </div>
  );
}

export default SelectInput;
