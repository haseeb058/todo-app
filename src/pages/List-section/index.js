import React, { useState } from "react";

import Button from "components/button";
import Input from "components/input";

import style from "./list.module.scss";
import AddTask from "./add-task";

const List = () => {
  const [addTask, setAddTask] = useState(false);
  const [incompleteTask, setIncompleteTask] = useState([
    {
      summary: "Complete the test",
      description: "dfsddfsadfsdf",
      time: "19:00",
    },
  ]);

  return (
    <div className={style.mainWrapper}>
      <div className={style.btnWrapper}>
        <Button
          title={"+ Add new task"}
          onClick={() => setAddTask(true)}
          className={style.btnAdd}
        />
      </div>
      <div className={style.incompleteWrapper}>
        <h3>Incomplete</h3>
        {incompleteTask.map(({ summary, time }, index) => (
          <div className={style.infoWrapper} key={index}>
            <Input type={"checkbox"} inputClass={style.checkbox} />
            <div className={style.infoLabel}>
              <label>{summary}</label>
              <span>⏰ {time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.completeWrapper}>
        <h3>Completed</h3>
        {CompleteTask.map(({ title }, index) => (
          <div className={style.infoWrapper} key={index}>
            <Input type={"checkbox"} inputClass={style.checkbox} />
            <div className={style.completeLabel}>
              <label>{title}</label>
            </div>
          </div>
        ))}
      </div>
      {addTask && (
        <AddTask
          setAddTask={setAddTask}
          setIncompleteTask={setIncompleteTask}
          addTask={addTask}
        />
      )}
    </div>
  );
};

export default List;

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
