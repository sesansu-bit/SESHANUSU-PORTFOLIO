import styles from "./skill.module.css";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () =>{
   const skillsData = [
      {
        icon: <IoLogoHtml5 className={styles["htmlicon"]} />,
        title: "HTML5",
        desc: "Build Stunning and Modern Websites with Interactive Features for Beginners and Experienced Developers.",
      },
      {
        icon: <IoLogoCss3 className={styles["htmlicon"]}/>,
        title: "CSS3",
        desc: "Design Responsive, and Modern Websites with Dynamic Styling for Beginners and Advanced Developers.",
      },
      {
        icon: <TbBrandJavascript className={styles["htmlicon"]}/>,
        title: "JAVASCRIPT",
        desc: "Create Interactive, Dynamic, Modern Websites with Powerful Features for Beginners and Advanced Developers.",
      },
      {
        icon: <FaJava className={styles["htmlicon"]} />,
        title: "JAVA",
        desc: "Build Robust, Scalable, and Modern Applications for Beginners and Advanced Programmers with Ease.",
      },
      {
        icon: <FaReact className={styles["htmlicon"]} />,
        title: "REACT",
        desc: "Build Dynamic, Modern, and Interactive Web Applications for Beginners and Advanced Developers.",
      },
      {
        icon: <SiRedux className={styles["htmlicon"]} />,
        title: "REDUX TOOLKIT",
        desc: "Simplify State Management for Dynamic, Scalable, and Modern Web Applications.",
      },
      {
        icon: <FaGithub className={styles["htmlicon"]}/>,
        title: "GITHUB",
        desc: "Master Version Control, Collaboration, and Repository Management for Developers at All Levels.",
      },
    ];
    
   return(<>    
   <div className={styles["Skill"]}>
      <div className={styles["abouttextcover"]}>       
        <div className={styles["aboutcover"]}>
         <div className={styles["leftline"]}></div>
         <div className={styles["about"]}>MY SKILL</div>
         </div>
           </div>
           

       <div className={styles["skillboxcontainer"]}>
       <div className={styles["backimage"]}> <img  src="final.jpg"/>    </div>

         <div className={styles["skillbox"]}>
           
 {skillsData.map((skill, index) => (
 <motion.div
 initial={{ y: 700, opacity: 0 }} // left side se
 animate={{ y: 0, opacity: 1 }}    // center pe aa jaaye
     transition={{ duration: 1.7,type: "tween",
       ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }} key={index} className={styles["htmlcover"]}>   
<div className={styles["html"]}>  
<div className={styles["htmliconcov"]}>{skill.icon}</div> 
<div className={styles["text1"]}>{skill.title}</div>
<div className={styles["text2"]}>{skill.desc}</div>
</div>
</motion.div>      
))}
               
         </div>     
         </div>


   </div>      
       </>
    );
   
}
export default About;