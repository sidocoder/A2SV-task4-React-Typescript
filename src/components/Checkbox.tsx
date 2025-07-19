
interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

function Checkbox({ checked, onToggle }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onToggle}
    />
  );
};


export default Checkbox;