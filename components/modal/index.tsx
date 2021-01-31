import * as React from "react";
import styles from "./modal.module.css";
import FocusTrap from "focus-trap-react";

type ModalProps = {
  onClose: () => void;
  title: string
};

const Modal: React.FC<ModalProps> = ({  onClose, children, title }) => {
  const ref = React.useRef(null);
  const buttonRef = React.useRef(null);

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const clickListener = (e: MouseEvent) => {
    if (ref && !(ref?.current).contains(e.target)) {
      onClose?.(); 
    }
  };

  //Place focus on close button initially
  React.useEffect(() => {
    buttonRef.current.focus();
  });

  //detect clicks outside modal and call onClose
  React.useEffect(() => {
    document.addEventListener("mousedown", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return (
    <FocusTrap>
      <div
        id="modal"
        ref={ref}
        className={styles["dialog"]}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        {children}
        <button
          ref={buttonRef}
          type="button"
          aria-label="Close what to wear modal"
          className={styles["close-dialog"]}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </FocusTrap>
  );
};

export default Modal;
