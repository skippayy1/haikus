import React from "react";
import { icons } from "../_data/icons";
import IconComponent from "./IconComponent";
import styles from "./HaikuPage.module.css";
import CommentSection from "./CommentSection";
import { getComments } from "../_data/haikus";

const HaikuPage = async ({ haiku }) => {
  console.log(haiku);
  const comments = await getComments(haiku.id);
  console.log(comments);
  return (
    <>
      <div className={styles.container}>
        <div className={styles["icon-container"]}>
          <IconComponent
            icon_index={haiku.icon_index}
            className={styles["author-icon"]}
          />
          <p className={styles["haiku-category"]}>{haiku.category}</p>
          <p className={styles["icon-name"]}>{icons[haiku.icon_index].name}</p>
        </div>
        <div>
          <h1 className={styles["haiku-text"]}>{haiku.text}</h1>
          <p className={styles["haiku-author"]}>- {haiku.auteur}</p>
        </div>
      </div>
      <CommentSection comments={comments} haikuId={haiku.id} />
    </>
  );
};

export default HaikuPage;
