import { useEffect } from "react";

export const Contacts = () => {
  useEffect(() => {
    document.title = 'Контакты';
  }, []);

  return (
    <div className="MainBlock">
        <div className="HeadBlock ContactsHead">
            <h1 className="TitleText">Контакты</h1>
        </div>
    </div>
  );
}

export default Contacts;