"use client";

import { createContext, useContext, useState } from "react";
import GetQuoteModal from "@/components/shared/GetQuoteModal";

type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const QuoteModalContext = createContext<ModalContextType | null>(null);

export const QuoteModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ isOpen, open, close }}>
      {children}

      {/* ✅ REAL MODAL CONNECTED */}
      <GetQuoteModal isOpen={isOpen} onClose={close} />
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error(
      "useQuoteModal must be used within QuoteModalProvider"
    );
  }

  return context;
};