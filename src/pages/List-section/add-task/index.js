import React from "react";

import Modal from "components/modal";
import Input from "components/input";
import Button from "components/button";
import Container from "components/container";

import chatIcon from "assets/icons/chat-icon.svg";
import disIcon from "assets/icons/discription.svg";
import timeIcon from "assets/icons/time-icon.svg";
import style from "./task.module.scss";
import TextArea from "components/textarea";
import { useAddList } from "./helper";

const AddTask = ({ addTask, setAddTask, setIncompleteTask }) => {
  const { register, onSubmit, handleSubmit, loading } = useAddList({
    setIncompleteTask,
    setAddTask,
  });
  return (
    <Modal
      open={addTask}
      handleClose={() => setAddTask(false)}
      className={style.modal}
    >
      <div className={style.main}>
        <h1 className={style.title}>New Task</h1>
        <form className={style.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputMainWrapper}>
            <div className={style.inputWrapper}>
              <img src={chatIcon} alt="icon" />
              <Input
                placeholder={"Summary"}
                name={"summary"}
                className={style.inputDiv}
                register={register}
              />
            </div>
            <div className={style.inputWrapper}>
              <img src={disIcon} alt="icon" />
              <TextArea
                placeholder={"Description"}
                className={style.inputDiv}
                name={"description"}
                register={register}
              />
            </div>
            <div className={style.inputWrapper}>
              <img src={timeIcon} alt="icon" />
              <Input
                placeholder={"Due date"}
                type={"time"}
                name={"time"}
                className={style.inputDiv}
                register={register}
              />
            </div>
          </div>
          <Container className={style.actionDiv}>
            <Button
              title={"Save"}
              isLoading={loading}
              className={style.btnSave}
              type={"submit"}
            />
            <Button
              title={"Cancel"}
              className={style.btnCancel}
              onClick={() => setAddTask(false)}
            />
          </Container>
        </form>
      </div>
    </Modal>
  );
};

export default AddTask;
