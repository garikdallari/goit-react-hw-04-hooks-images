import { useEffect } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div onClick={handleOverlayClick} className="Overlay">
      <div className="Modal">{children}</div>
    </div>,

    modalRoot
  );
}

export default Modal;
