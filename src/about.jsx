import styles from "./about.module.css";
import { motion } from "framer-motion";

const About = () => {
  

  return (<> 

     <div className={styles["aboutcontainer"]}>
        
     <div className={styles["abouttextcover"]}>       
   <div className={styles["aboutcover"]}>
    <div className={styles["leftline"]}></div>
    <div className={styles["about"]}> ABOUT ME</div>
    </div>
        </div>
        
        <motion.div
      initial={{ y: 1000, opacity: 0 }} // left side se
      animate={{ y: 0, opacity: 1 }}    // center pe aa jaaye
          transition={{ duration: 1.7,type: "tween",
            ease: "easeInOut" }}
           viewport={{ once: false, amount: 0.2 }}
           className={styles["homepagecover"]}>
    <div className={styles["homeright"]}>
        <div className={styles["rightcard"]}> 
          <img src="/pic.jpg"/>
        </div>
        </div>


        <div className={styles["homeleft"]}>
        <div className={styles["backimage"]}> <img  src="final.jpg"/>    </div>

   <div className={styles["aboutcontent"]}>
   I’m Seshansu Sekhar Swain , recently i have completed my B.Tech from KIIT, Bhubaneswar.

As a Fresher Frontend Developer, I’m deeply passionate about crafting engaging and visually striking frontend designs. I stay consistently updated with the latest design trends, blending creativity with functionality to build interfaces that are both beautiful and user-centric.

I strongly believe that a well-designed website should not only look stunning, but also deliver a seamless and enjoyable user experience. Every design decision I make is backed by thoughtful research and a clear understanding of user expectations.

I enjoy solving design challenges and turning complex ideas into clean, intuitive layouts.
                 </div>
        </div>

       
        </motion.div>
    </div>   
       </>
    );
   
}
export default About;