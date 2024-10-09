import React from "react";
import Link from "next/link"; // Correct the import statement
import IconComponent from "./IconComponent";
import styles from "./HaikuComponent.module.css";

const HaikuComponent = ({ haiku, authorDisplayed }) => {
  console.log(haiku);
  return (
    <Link className={styles.link} href={`/haikus/${haiku.id}`}>
      <div className={styles.haiku}>
        <div className={styles["author-icon"]}>
          <IconComponent icon_index={haiku.icon_index} />
        </div>
        <div
          className={`${styles["haiku-content"]} ${
            !authorDisplayed ? styles["center-text"] : ""
          }`}
        >
          <div className={styles["haiku-text"]}>
            <p>{haiku.text}</p>
          </div>
          {authorDisplayed && (
            <div className={styles["haiku-author"]}>
              <p>{haiku.auteur}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HaikuComponent;
