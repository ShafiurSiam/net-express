import { createContext, useContext, useState, useCallback, useMemo } from "react";
import Modal from "../components/ui/Modal.jsx";
import ConnectionRequestForm from "../components/ui/ConnectionRequestForm.jsx";
import { useLanguage } from "./LanguageContext.jsx";

const ConnectionRequestContext = createContext(null);

/**
 * Mounted once near the app root so any component (Hero CTA, package card,
 * How-It-Works step, ...) can open the same "request a connection" modal.
 */
export const ConnectionRequestProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [packageId, setPackageId] = useState("");
  const { t } = useLanguage();

  const openRequest = useCallback((initialPackageId = "") => {
    setPackageId(initialPackageId);
    setIsOpen(true);
  }, []);

  const closeRequest = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openRequest }), [openRequest]);

  return (
    <ConnectionRequestContext.Provider value={value}>
      {children}
      <Modal isOpen={isOpen} onClose={closeRequest} title={t("modal.connectionRequestTitle")}>
        <ConnectionRequestForm initialPackageId={packageId} onSubmitted={() => {}} />
      </Modal>
    </ConnectionRequestContext.Provider>
  );
};

export const useConnectionRequest = () => {
  const ctx = useContext(ConnectionRequestContext);
  if (!ctx) {
    throw new Error("useConnectionRequest must be used within ConnectionRequestProvider");
  }
  return ctx;
};
