/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

interface UseSelectedButtonContextProps {
  children: ReactNode;
}

export type SelectOptionsData = "allProducts" | "availableNow";

type UseSelectedButtonContextData = {
  selectedButton: SelectOptionsData;
  buttonClick: (id: SelectOptionsData) => void;
};

const UseSelectedButtonContext = createContext({} as UseSelectedButtonContextData);

export function UseSelectedButtonProvider({ children }: UseSelectedButtonContextProps) {
  const [selectedButton, setSelectedButton] = useState<SelectOptionsData>("allProducts");

  function buttonClick(id: SelectOptionsData) {
    setSelectedButton(id);
  }

  return (
    <UseSelectedButtonContext.Provider value={{ selectedButton, buttonClick }}>
      {children}
    </UseSelectedButtonContext.Provider>
  );
}

export const useSelectedButtonContext = () => useContext(UseSelectedButtonContext);
