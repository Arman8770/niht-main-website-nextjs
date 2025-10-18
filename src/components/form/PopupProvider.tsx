"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import PopupForm from "./EnrollFormPopup";

interface PopupContextType {
  openPopup: () => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType>({
  openPopup: () => {},
  closePopup: () => {},
});

export const usePopup = () => useContext(PopupContext);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <PopupForm isOpen={isOpen} onClose={closePopup} />
    </PopupContext.Provider>
  );
};
