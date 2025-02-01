import { useState } from "react";
import "../styles/components/button.css";
import { SelectOptionsData, useSelectedButtonContext } from "../hooks/useSelectedButton";

interface ButtonProps {
  id: SelectOptionsData;
  label: string;
  isDefaultSelected?: boolean;
}

export function Button({ id, label, isDefaultSelected }: ButtonProps) {
  const [isSelected, setIsSelected] = useState(isDefaultSelected);
  const { selectedButton, buttonClick } = useSelectedButtonContext();

  const className = id === selectedButton ? "button__container button__container--selected" : "button__container";

  function handleClick() {
    setIsSelected(!isSelected);
    buttonClick(id);
  }

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
