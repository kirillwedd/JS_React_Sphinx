import "../Checkbox/Checkbox.css"

function Checkbox({ children,  fors, onChange, checked }) {
  return (
    <>
      <label for={fors}>
        <input type="checkbox" onChange={onChange} checked={checked} id={fors} />
        {children}
      </label>
    </>
  );
}

export default Checkbox
