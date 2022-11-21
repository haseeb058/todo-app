import React from "react";

import Button from "components/button";
import Input from "components/input";

import style from "./list.module.scss";

const List = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.btnWrapper}>
        <Button title={"+ Add new task"} className={style.btnAdd} />
      </div>
      <div className={style.incompleteWrapper}>
        <h3>Incomplete</h3>
        {incompleteTask.map(({ title, time, index }) => (
          <div className={style.infoWrapper} key={index}>
            <Input type={"checkbox"} inputClass={style.checkbox} />
            <div className={style.infoLabel}>
              <label>{title}</label>
              <span>⏰ {time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.completeWrapper}>
        <h3>Completed</h3>
        {CompleteTask.map(({ title }) => (
          <div className={style.infoWrapper}>
            <Input type={"checkbox"} inputClass={style.checkbox} />
            <div className={style.completeLabel}>
              <label>{title}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

const incompleteTask = [
  {
    title: "Complete the test",
    time: "19:00",
  },
  {
    title: "Meeting with Jack",
    time: "19:00",
  },
  {
    title: "Buy a chocolate for Mom",
    time: "19:00",
  },
  {
    title: "Facetime with Dad",
    time: "19:00",
  },
];

const CompleteTask = [
  {
    title: "Respond to Jane email",
  },
  {
    title: "Rechedule weekly meeting",
  },
  {
    title: "Service my bike",
  },
  {
    title: "Recheck the agreement document",
  },
];
