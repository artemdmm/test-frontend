import React, { useState } from "react";
import '../../style/Modal.css';

export const Modal = ({ closeModal, onSubmit, errorId }) => {
  const [formState, setFormState] = useState(
    {
      login: "",
      password: ""
    }
  );
  const [errors, setErrors] = useState(0);

  const validateForm = () => {
    if (formState.login && formState.password) {
      if (formState.password.length >= 8) {
        setErrors(0);
        return true;
      }
      else {
        setErrors(2);
        return false;
      }
    } else {
      setErrors(1);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="login" className="CardTitle">Логин</label>
            <input name="login" onChange={handleChange} value={formState.login} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="CardTitle">Пароль</label>
            <input name="password" type="password" onChange={handleChange} value={formState.password}/>
          </div>
          {errors === 1 && <div className="error">{`Введите все поля`}</div>}
          {errors === 2 && <div className="error">{`Пароль должен иметь не меньше 8 символов`}</div>}
          {errors === 0 && errorId === 1 && <div className="error">{`Пользователь не найден`}</div>}
          {errors === 0 && errorId === 2 && <div className="error">{`Пароль неверный`}</div>}
          <button type="submit" className="Btn Style-1" onClick={handleSubmit}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};