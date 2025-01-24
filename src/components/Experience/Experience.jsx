import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.mainTitle}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.subTitle}>Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  <div className={styles.skillPercentage}>{skill.percentage}</div>
                </div>
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.experienceSection}>
          <h3 className={styles.subTitle}>Professional Experience</h3>
          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
