import './Dropdown.style.scss';

interface DropdownProps {
  options: Record<string, string>;
  selectedOption: string;
  onChange: (value: string) => void;
}

// TODO: make custom dropdown with styled options list
export const Dropdown = ({
  options,
  selectedOption,
  onChange,
}: DropdownProps) => {
  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={(event) => onChange(event.target.value)}
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};
