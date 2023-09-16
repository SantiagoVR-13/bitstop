import Onboarding from "../Onboarding/Onboarding";
import "./Signup.scss";
import { Link } from "react-router-dom";

function signup() {
  return (
    <>
      <div className="signup">
        <Link to="/" className="signup__button">
          <p className="signup__title">BitStop</p>
        </Link>
        <Onboarding />
        <Link to="/create-wallet" className="signup__button">
          Create Wallet
        </Link>
        <Link to="/" className="signup__button">
          Sign in
        </Link>
      </div>
    </>
  );
}

export default signup;
