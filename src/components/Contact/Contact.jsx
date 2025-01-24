import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className={styles.icon} />
          <a href="mailto:mohamedmotawea018@gmail.com" target="_blank" rel="noopener noreferrer">
            mohamedmotawea018@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.icon}
          />
          <a 
            href="https://www.linkedin.com/in/mohamedmotawea" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/MohamedMotawea
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className={styles.icon} />
          <a 
            href="https://www.github.com/mohamedassemmotawea" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/MohamedMotawea
          </a>
        </li>
      </ul>
    </footer>
  );
};
