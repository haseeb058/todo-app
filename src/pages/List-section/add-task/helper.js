import { useState } from "react";
import { useForm } from "react-hook-form";

export const useAddList = ({ setIncompleteTask, setAddTask }) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setIncompleteTask((oldArray) => [...oldArray, data]);
      setAddTask(false);
      setLoading(false);
    }, 1000);
  };

  return {
    register,
    onSubmit,
    setLoading,
    handleSubmit,
    loading,
  };
};
