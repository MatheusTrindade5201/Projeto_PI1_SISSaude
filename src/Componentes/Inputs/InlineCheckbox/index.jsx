import './style.css';

function InlineCheckbox({ id, label, checked, onChange }) {
  return (
    <div className="inline-checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InlineCheckbox;