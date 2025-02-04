import { useDebounce } from '../../hooks/useDebounce';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  const handleFieldUpdate = useDebounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    500,
  );

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Address, city, zip"
        defaultValue={value}
        onChange={handleFieldUpdate}
      />
      <div className="underline active"></div>
    </div>
  );
};
