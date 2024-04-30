/**
 * Renders a dropdown element.
 */

interface DropdownProps {
  options: string[];
  label: string;
  value: any;
  setSelected: (selectedValue: any) => void;
}

const Dropdown = ({ options, label, setSelected, value }: DropdownProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(parseInt(e.target.value));
  };

  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className="custom-select"
      >
        {options.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;