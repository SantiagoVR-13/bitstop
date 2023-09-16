import "./Header.scss";
import { Link } from "react-router-dom";
import send from "../../Assets/Icons/send-icon.PNG";
import receive from "../../Assets/Icons/receive-icon.PNG";

function Header() {
  return (
    <>
      <div className="Header">
        <Link to="/scan-send">
          <img className="Header__send" src={send} alt="scaner to send" />
        </Link>
        <Link to="/scan-receive">
          <img className="Header__receive" src={receive} alt="scaner to send" />
        </Link>
      </div>
    </>
  );
}

export default Header;
