import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { sha512 } from 'crypto-hash';
import { useState } from "react";
import { Main } from './views/Main';
import { Contacts } from './views/Contacts';
import { Modal } from './views/components/Modal';
import './App.css';
import './style/Main.css';
import users from './users.json';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userIdLogin, setUserIdLogin] = useState(-1);
  const [errorId, setErrorId] = useState(0);

  const handleSubmit = async (userCred) => {
    let hash = await sha512(userCred.password)
    let userId = -1;
    for (var user in users.users) {
      if (userCred.login === users.users[user].login) {
        userId = user;
      }
    }
    if (userId < 0) {
      setErrorId(1)
      setModalOpen(true);
      console.log("user not found");
    }
    else {
      if (hash === users.users[userId].password) {
        setUserIdLogin(userId);
        console.log("success");
      }
      else {
        setErrorId(2)
        setModalOpen(true);
        console.log("wrong password");
      }
    }
  };

  const logout = async () => { setUserIdLogin(-1) };

  return (
      <div>
        <BrowserRouter>
          {/* Navigation */}
          <nav className="Navbox">
            <Link className="NavLogo" to="/"><img src={require('./img/logo.svg').default } alt="Логотип" /></Link>
            <div className="NavRight">
              <Link className="NavText" to="/contacts">Контакты</Link>
              {userIdLogin < 0 && <button className="Btn-Header" id="headline sec-" onClick={() => setModalOpen(true)}>Войти</button>}
              {userIdLogin > -1 && <button className="Btn-Header" id="headline sec-" onClick={() => logout()}>Выйти</button>}
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Main setModalOpen={ setModalOpen } userIdLogin={ userIdLogin } logout={ logout } />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
        {modalOpen && (
            <Modal
              closeModal={() => {
                setErrorId(0);
                setModalOpen(false);
              }}
              onSubmit={handleSubmit}
              errorId={errorId}
            />
        )}
      </div>
  );
}

export default App;
