function Checkbox({ id, label, checked, onChange, className = "" }) {
  return (
    <div className={`input-group ${className}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="chkboxEnergia"
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default Checkbox;
