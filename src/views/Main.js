import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Main = ({ setModalOpen, userIdLogin, logout }) => {
  const navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  
  useEffect(() => {
    document.title = 'Главная';
  }, []);

  return (
    <div className="MainBlock">
        <div className="HeadBlock">
            <h1 className="TitleText" id="headline sec-">Место для получения медицинской помощи</h1>
            <div className="BtnBlock">
                {userIdLogin < 0 && <button className="Btn Style-1" onClick={() => setModalOpen(true)}>Войти</button>}
                {userIdLogin > -1 && <button className="Btn Style-1" onClick={() => routeChange('cabinet')}>Личный кабинет</button>}
                <button className="Btn Style-2" onClick={() => routeChange('contacts')}>Контакты</button>
            </div>
        </div>
        <div className="CardBlock">
            <div className="Card">
                <div className="CardImage"><img src={require('../img/003-cardiogram.png')} alt="Иконка №1" /></div>
                <h5 className="CardTitle">Онлайн-прием</h5>
                <div className="BreakLine" />
                <p className="CardDescription">Рыба текст</p>
            </div>
            <div className="Card">
                <div className="CardImage"><img src={require('../img/icon cool-icon-152.png')} alt="Иконка №2" /></div>
                <h5 className="CardTitle">Экстренный случай</h5>
                <div className="BreakLine" />
                <p className="CardDescription">Рыба текст</p>
            </div>
            <div className="Card">
                <div className="CardImage"><img src={require('../img/icon cool-icon-155.png')} alt="Иконка №3" /></div>
                <h5 className="CardTitle">Лечение рака</h5>
                <div className="BreakLine" />
                <p className="CardDescription">Рыба текст</p>
            </div>
        </div>
    </div>
  );
}

export default Main;