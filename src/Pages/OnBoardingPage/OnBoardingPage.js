import "./OnBoardingPage.scss";
import send from '../../Assets/Icons/send-icon.PNG'
import recieve from '../../Assets/Icons/receive-icon.PNG'
import menu from '../../Assets/Icons/menu.png'

function OnBoardingPage() {
  return (
    <>
      <div className="Tab">
      <div className="Tab__icon-container"><img className="Tab__send"src={recieve} alt="Send" /></div>
      <div className="Tab__icon-container"><img className="Tab__menu"src={menu} alt="Menu" /></div>
      <div className="Tab__icon-container"><img className="Tab__recieve"src={send} alt="Recieve" /></div>
      </div>
      <div className="OnBoardingPage"></div>
    </>
  );
}

export default OnBoardingPage;
