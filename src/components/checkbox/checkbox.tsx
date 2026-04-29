import { ReactNode } from "react";
import styles from "./checkbox.module.scss";

interface ICheckboxProps {
  label: ReactNode;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxComponent = ({
  label,
  onChange,
  checked = true,
}: ICheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={styles.contentLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
        className={styles.input}
      />
      <span className={styles.custom}></span>
      {label}
    </label>
  );
};

export default CheckboxComponent;
