import "./Header.scss";
import { Link } from "react-router-dom";
import send from '../../Assets/Icons/send-icon.PNG'
import recieve from '../../Assets/Icons/receive-icon.PNG'
import menu from '../../Assets/Icons/menu.png'

function Header() {
  return (
    <>
    <div className="Tab">
    <Link to="/scan-send">
      <div className="Tab__icon-container"><img className="Tab__send"src={recieve} alt="Send" /></div>
      </Link>
      <Link to="/menu">
      <div className="Tab__icon-container"><img className="Tab__menu"src={menu} alt="Menu" /></div>
      </Link>
      <Link to="/scan-receive">
      <div className="Tab__icon-container"><img className="Tab__recieve"src={send} alt="Recieve" /></div>
      </Link>
      </div>
    </>
  );
}

export default Header;
