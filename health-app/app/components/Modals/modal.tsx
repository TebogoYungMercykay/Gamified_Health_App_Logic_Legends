import React from "react";
import "./modal.css";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-wrapper" onClick={handleClose}>
      <div className="modal">
        <button className="modal-close-button" onClick={() => onClose()}>
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}