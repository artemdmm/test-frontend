import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import users from '../users.json';

export const Cabinet = ({ userIdLogin, logout }) => {
  const navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  
  useEffect(() => {
    document.title = 'Личный кабинет';
  }, []);

  return (
    <div className="MainBlock">
        {userIdLogin > -1 && <div className="HeadBlock">
            <h1 className="TitleText" id="headline sec-">Привет, {users.users[userIdLogin].name}</h1>
            <div className="BtnBlock">
                <button className="Btn Style-1" onClick={() => logout()}>Выйти из аккаунта</button>
                <button className="Btn Style-2" onClick={() => routeChange('../contacts')}>Перейти в контакты</button>
            </div>
        </div>}
    </div>
  );
}

export default Cabinet;