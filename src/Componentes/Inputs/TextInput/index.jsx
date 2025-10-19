import "../../../styles/styleInput.css";

function TextInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error = "",
  className = "",
  name,
}) {
  const hasError = Boolean(error);

  return (
    <div className={`input-group ${hasError ? "has-error" : ""} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="campo_preenchimento"
        aria-invalid={hasError}
        name={name}
      />
      {hasError && <span className="error-message">{error}</span>}
    </div>
  );
}

export default TextInput;
