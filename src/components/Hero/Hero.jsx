import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mohamed Motwea</h1>
        <p className={styles.description}>
          I&apos;m a FullStack Developer with 2 years of experience using Angular and
          .NetCore. Reach out if you&apos;d like to learn more!
        </p>
        <a href="mailto:mohamedmotawea018@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
