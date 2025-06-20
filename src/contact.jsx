import styles from "./contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
const  Contact = () =>{
  
   return(<>    
   <div className={styles["Contact"]}>
       <div className={styles["abouttextcover"]}>       
         <div className={styles["aboutcover"]}>
          <div className={styles["leftline"]}></div>
          <div className={styles["about"]}>CONTACT ME</div>
          </div>
              </div>
         <div className={styles["homepagecover2"]}> 
            <div className={styles["diamond"]}>  <img src="final.jpg" />  </div>
            
            <div className={styles["formbox"]}> 
        <div className={styles["get"]}>GET IN TOUCH</div>    
               <form>
            <input type="text"  placeholder="Enter your name" required/>
             <input type="email"  placeholder="Enter your email" required/>
                  <input type="number" placeholder="Enter your number" required /> 
                  <div className={styles["button"]}>Contact Me</div>
               
                  </form>  
   </div> 
           
        


            <div className={styles["socialcover"]}> 
            <div className={styles["iconcover"]}>
              <div className={styles["whatsapp"]}><FaWhatsapp className={styles["whatsappicon"]}/></div>
              <div className={styles["instagram"]}><FaInstagram className={styles["instagramicon"]} /> </div>
              <div className={styles["facebook"]}><LuFacebook className={styles["facebookicon"]} /></div>
              <div className={styles["twitter"]}><SlSocialTwitter className={styles["twittericon"]} /></div>
               </div>


         </div>
         </div> 
              </div>



   
  
    
    </>
    );
   
}
export default Contact;
