import React from "react";
import Modal from "components/modal";

import style from "./delete.module.scss";
import Button from "components/button";

const DeleteConfirmModal = ({
  setDeleteId,
  deleteLoading,
  deleteModalOpen,
  handleDeleteRow,
  setDeleteModalOpen,
}) => {
  const handleClose = () => {
    setDeleteModalOpen && setDeleteModalOpen(false);
    setDeleteId && setDeleteId(null);
  };

  return (
    <Modal
      open={deleteModalOpen}
      handleClose={() => setDeleteModalOpen(false)}
      className={style.modal}
    >
      <div className={style.main}>
        <div className={style.imgDiv}>
          <img src="" alt="" />
        </div>
        <div className={style.contentDiv}>
          <h1>Are you sure?</h1>
          <p>
            Deleting will permanently remove this item from the system.
            <strong> This cannot be undone!</strong>
          </p>
        </div>
        <div className={style.actionDiv}>
          <Button
            title={"Cancel"}
            className={style.cancelBtn}
            handleClick={handleClose}
          />
          <Button
            title={"Delete"}
            className={style.deleteBtn}
            isLoading={deleteLoading}
            handleClick={handleDeleteRow}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
