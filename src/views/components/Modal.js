import React, { useState } from "react";
import '../../style/Modal.css';

export const Modal = ({ closeModal, onSubmit, errorId }) => {
  const [formState, setFormState] = useState(
    {
      login: "",
      password: ""
    }
  );
  const [errors, setErrors] = useState(false);

  const validateForm = () => {
    if (formState.login && formState.password) {
      setErrors(false);
      return true;
    } else {
      setErrors(true);
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
          {errors && <div className="error">{`Введите все поля`}</div>}
          {!errors && errorId === 1 && <div className="error">{`Пользователь не найден`}</div>}
          {!errors && errorId === 2 && <div className="error">{`Пароль неверный`}</div>}
          <button type="submit" className="Btn Style-1" onClick={handleSubmit}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};