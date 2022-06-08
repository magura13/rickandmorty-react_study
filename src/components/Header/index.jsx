import Logo from "../../assets/images/logo1.png";
import "./style.css"

const Header = (props) => {
  return (
    <header className="Header__container">
      <img className="Logo"
        alt="Logo do Rick And Morty"
        src={Logo}
      />
    </header>
  );
};
export default Header;
