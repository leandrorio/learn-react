import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li><Link to="/" className={styles.item}>Home</Link></li>
        <li><Link to="/empresa" className={styles.item}>Empresa</Link></li>
        <li><Link to="/contato" className={styles.item}>Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar