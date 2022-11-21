import Loading from "components/loading";

import style from "./button.module.scss";

const Button = ({
  className,
  title,
  onClick,
  type,
  isLoading,
  disabled,
  icon,
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${className}`}
        onClick={(e) => {
          onClick && onClick(e);
        }}
        type={type}
        disabled={disabled || isLoading || false}
        style={{ pointerEvents: isLoading || disabled ? "none" : "auto" }}
      >
        {icon && <img src={icon} width={25} alt={"button icon"} />}
        {isLoading ? <Loading loaderClass={style.loaderClass} /> : title}
      </button>
    </>
  );
};

export default Button;
