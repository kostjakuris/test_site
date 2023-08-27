import "./Header.min.css";
import { Routes, Route, Link } from "react-router-dom";
import signOutIcon from "../../icons/codicon_sign-out.svg";
import { HookData } from "../input/inputVariables";
import SignIn from "../signInForm/SignIn";
import headerAvatar from "../../icons/carbon_user-avatar-filled-alt1.svg";
import arrowDown from "../../icons/mdi_chevron-down.svg";

const Header = ({ ...props }: HookData) => {
  function changeNavState() {
    if (props.signActive) {
      props.setSignActive(false);
    }
    if (props.navActive) {
      props.setNavActive(false);
    }
  }

  return (
    <header className="header" onClick={() => changeNavState()}>
      <Routes>
        <Route path="/SignIn.tsx" element={<SignIn />} />
      </Routes>
      <div className="block"></div>
      <div className="header__wrapper">
        <div className="header__img">
          <img src={headerAvatar} alt="avatar" />
        </div>
        <div className="header__info">
          <div className="header__info-title">Customer</div>
          <a href="mailto:example@gmail.com" className="header__info-email">
            example@gmail.com
          </a>
        </div>
        <span className="header__icon" onClick={() => props.setSignActive(true)}>
          <img
            className={props.signActive ? "header__icon-image active" : "header__icon-image"}
            src={arrowDown}
            alt="arrow"
          />
        </span>
        <div
          className={props.signActive ? "header__menu" : "header__menu disabled"}
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/SignIn.tsx" className="header__button">
            <span className="button__img">
              <img className="button__img-icon" src={signOutIcon} alt="door" />
            </span>
            Sign out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
