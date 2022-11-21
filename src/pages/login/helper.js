import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { store, setToken } from "store/index";

export const useLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      store.dispatch(
        setToken({
          token: true,
        })
      );
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return {
    register,
    onSubmit,
    setLoading,
    handleSubmit,
    errors,
    loading,
  };
};

export const loginSchema = yup.object().shape({
  email: yup.string().required("email is required").email(),
  password: yup.string().required("Password is required"),
});
