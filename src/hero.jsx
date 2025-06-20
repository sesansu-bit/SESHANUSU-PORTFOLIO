import styles from "./hero.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
return(
    <>
    <div className={styles["homepagecover"]}>

    <div className={styles["homeleftbefore"]}>
    <div

          className={styles["homeleft"]}>
           <div className={styles["leftstyle"]}> 
                  <div className={styles["round"]}> </div>
                  <div className={styles["line"]}> </div>
          </div>
           <div className={styles["lefttext"]}> 
            <div className={styles["frontend"]}>Frontend Developer</div>
                  <div className={styles["hello"]}>Hello it's Me </div>
                  <div className={styles["name"]}>Seshansu Sekhar Swain</div>
                  <div className={styles["text1"]}>I am a passionate frontend developer with a keen eye for design and a strong focus on building engaging and user-friendly interfaces. I specialize in crafting responsive, high-performance, and visually appealing websites that deliver a seamless user experience across all devices. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React, I translate complex ideas into intuitive and functional designs. </div>
                  <div className={styles["contactcover"]}>
                  <div className={styles["whatsapp"]}><FaWhatsapp className={styles["whatsappicon"]}/></div>
                  <div className={styles["instagram"]}><FaInstagram className={styles["instagramicon"]} /> </div>
                  <div className={styles["facebook"]}><LuFacebook className={styles["facebookicon"]} /></div>
            <div className={styles["twitter"]}><AiOutlineLinkedin  className={styles["twittericon"]} /></div>
            </div>
              <div className={styles["contactmecover"]}>
              <Link to="/contact" className={styles["contactme"]}>Contact Me</Link>   
             
              </div> 
            </div>
            </div>
            <div className={styles["homeright"]}>
          
        <div className={styles["rightcard"]}> 
          <img src="/pic.jpg"/>
          </div>
          </div>
        </div>
        


        
      


    </div>
    </>
  );
};

export default Hero;
