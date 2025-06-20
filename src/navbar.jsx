import { useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  const [showSide, setShowSide] = useState(false);

 
  return (
    <>
      <div className={styles["navcoverback"]}>
        <div className={styles["navcover"]}>
          <div className={styles["portfoliocover"]}>
            <p className={styles["portfolio"]}> Portfolio .</p>
          </div>
          <div className={styles["rightnav"]}>
          <Link to="/home" className={styles["home"]}>Home</Link>   
         <Link to="/about"  className={styles["about"]}>About</Link>   
         <Link to="/skill"  className={styles["skill"]}>Skill</Link>   
         <Link to="/project"  className={styles["project"]}>Project</Link>   
         <Link to="/contact"  className={styles["contact"]}>Contact</Link>   
          </div>
          <div
            className={styles["sideicon"]}
            onClick={() => setShowSide(!showSide)}
          >
            <FaBarsStaggered className={`${styles["icon"]} ${
            showSide && styles["iconwhite"] 
          }`} />
          </div>
        </div>
      </div>
      
      {showSide && (
        <div className={styles["sideitem"]} >
          <Link to="/home" className={styles["item"]}>Home</Link>   
         <Link to="/about"  className={styles["item"]}>About</Link>   
         <Link to="/skill"  className={styles["item"]}>Skill</Link>   
         <Link to="/project"  className={styles["item"]}>Project</Link>   
         <Link to="/contact"  className={styles["item"]}>Contact</Link>   
        </div>
      )}
    </>
  );
};
export default Navbar;