import styles from "./project.module.css";
const  Project = () =>{
    const projectData = [
        {
          number: "01",
          title: "SHOPPING UI (REACT-REDUX)",
          link:"https://frontend-shopp.onrender.com/",
          description: "Developed a more advanced version of the shopping app using React-redux . clean component structure, Enhanced user experience with dynamic cart updates and seamless state synchronization.",
        },
        {
          number: "02",
          title: "SOCIALMEDIA CLONE(REACT)",
          link:"https://github.com/sesansu-bit?tab=repositories",
          description: "Developed an Instagram clone using React to replicate the social media platform’s core features.Implemented double-tap like animations, story navigation, and responsive design for a real-time social experience.",
        },
        {
          number: "03",
          title: "SHOPPING UI (JAVASCRIPT)",
          link:"https://github.com/sesansu-bit?tab=repositories",
          description: "Created a shopping website from scratch using JavaScript to manage product listings, cart functionality, and checkout processes and interactive cart updates for a smooth shopping experience.",
        },
        {
          number: "04",
          title: "PORTFOLIO WEBSITE(REACT)",
          link:"https://seshanusu-portfolio.vercel.app/",
          description: "Created a personal portfolio website using React to showcase design and development skills.Integrated smooth animations and modern UI aesthetics to reflect personal creativity and professionalism.",
        },
        {
          number: "05",
          title: "BARBER SHOP (REACT)",
          link:"https://alpha-barber-shop.vercel.app/",
          description: "Designed and developed a responsive UI for a barber shop website using React to demonstrate frontend design proficiency.service-focused design to offer a realistic business-oriented frontend experience.",
        }
      ];
      
   return(<>    
   <div className={styles["Project"]}>
        <div className={styles["abouttextcover"]}>       
       <div className={styles["aboutcover"]}>
        <div className={styles["leftline"]}></div>
       <div className={styles["about"]}>MY PROJECT</div>
       </div>
       </div>


   <div className={styles["projectbox"]}>
               
   {projectData.map((project, index) => (
  <div className={styles["projectitem"]} key={index}>
    <div className={styles["backimage"]}>
    <img  src="diamond2.jpg"/>     
    </div>
    <div className={styles["textcover"]}>
      <div className={styles["project-number"]}>{project.number}</div>
      <p className={styles["project-title"]}>{project.title}</p>
      <p className={styles["project-description"]}>{project.description}</p>
      <a href={project.link} className={styles["github"]}>LINK</a>     </div>
  </div>
))}
   


   </div>    
   </div>   
    </>
    );
   
}
export default Project;

/*
<div className={styles["shoppingcover"]}>
   <div className={styles["shopimage"]}><img src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/10/Best-Online-Shopping-Websites.png"/></div>
   <div className={styles["shoppingtext"]}>
   Created a own design shopping website from scratch using JavaScript to manage product listings, cart functionality, and checkout processes.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["instacover"]}>
   <div className={styles["instaimage"]}><img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/944000/944824/1596305-full.jpg "/></div>
   <div className={styles["instatext"]}>
   Developed an Instagram clone using React to replicate the social media
   platform’s core features.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["advancecover"]}>
   <div className={styles["advanceimage"]}><img src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg"/></div>
   <div className={styles["advancetext"]}>
   Developed a more advanced version of the shopping app using React, incorporating modern state management with Redux Toolkit.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["portcover"]}>
   <div className={styles["portimage"]}><img src="https://i.pinimg.com/originals/47/23/51/472351ded0828c02cfa96cbf84cf07ca.png"/></div>
   <div className={styles["porttext"]}>Created a personal portfolio website using React to showcase design and development skills.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p></div>
   </div>

   */