import React from "react";

import Input from "components/input";
import Button from "components/button";
import Container from "components/container";

import { useLogin } from "./helper";

import style from "./login.module.scss";

const Login = () => {
  const { onSubmit, handleSubmit, register, errors, loading } = useLogin();

  return (
    <div className={style.mainWrapper}>
      <Container>
        <div className={style.card_wrapper}>
          <h2 className={style.card_header}>Log In</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.form_wrapper}
          >
            <div className={style.textWrapper}>
              <Input
                name="email"
                register={register}
                placeholder={"Email"}
                errorMessage={errors?.email?.message}
              />
            </div>
            <div className={style.textWrapper}>
              <Input
                type="password"
                name="password"
                register={register}
                placeholder={"Password"}
                errorMessage={errors?.password?.message}
              />
            </div>
            <div className={style.btn_wrapper}>
              <Button
                type={"submit"}
                title={"Log In"}
                isLoading={loading}
                className={style.btnLogin}
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
