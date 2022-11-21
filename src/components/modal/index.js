import style from "./modal.module.scss";

// import cross from "assets/cross.svg";

const Modal = ({ open, children, className, handleClose }) => {
  return (
    <>
      {open && (
        <div className={style.modalWrapper}>
          <div
            className={`${style.modalContentWrapper} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
