import "../Checkbox/Checkbox.css"

function Checkbox({ children, value,  fors, onChange, checked }) {
  return (
    <>
      <label for={fors}>
        <input type="checkbox" onChange={onChange} checked={checked} id={fors} value={value} />
        {children}
      </label>
    </>
  );
}

export default Checkbox
