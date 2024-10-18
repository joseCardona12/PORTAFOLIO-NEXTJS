import "./footerStyles.css";
import Navba from "../Header/Navbar/Navbar";
export default function Footer(): React.ReactNode {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="top-image"></div>
        <div className="top-information-coder">
          <h4>Jose Cardona</h4>
          <p>Designer - Dev FullStack</p>
        </div>
      </div>
      <div className="footer-bottom">
        <Navba />
        <p>Copyright @ Developed and Designed by @joseCardona</p>
      </div>
    </footer>
  );
}
