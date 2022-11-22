import style from "./textarea.module.scss";

const TextArea = ({
  errorMessage,
  label,
  name,
  placeholder,
  register,
  disabled,
  className,
}) => {
  return (
    <>
      <div className={`${style.note} ${className}`}>
        {label && <label>{label}</label>}
        <textarea
          style={{
            border: errorMessage ? "1px solid #ff5050" : "",
          }}
          placeholder={placeholder}
          name={name}
          rows={6}
          {...(register && register(name))}
          disabled={disabled || false}
        ></textarea>
        {errorMessage ? (
          <span className={style.errorMessage}>{errorMessage}</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TextArea;
