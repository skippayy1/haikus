'use client'
import React, { useEffect, useState } from 'react'
import styles from "./homepage.module.css";
import HaikuGrid from './HaikuGrid';

const HomePageComponent = ({haikus}) => {
    const siteText = {
        english: ["Evanescence", "of", "Things"],
        japanese: ["儚さ", "の", "物"],
      };
    const [isJapanese, setIsJapanese] = useState(false);
    const [animating, setAnimating] = useState(false);
  
    useEffect(() => {
      let isMounted = true;
  
      const changeLanguage = async () => {
        while (isMounted) {
          setAnimating(true);
          await new Promise((resolve) => setTimeout(resolve, 400));
          if (isMounted) {
            setIsJapanese((prev) => !prev);
            setAnimating(false);
          }
          await new Promise((resolve) => setTimeout(resolve, 3600));
        }
      };
  
      changeLanguage();
  
      return () => {
        isMounted = false;
      };
    }, []);
  
    const currentText = isJapanese ? siteText.japanese : siteText.english;
  
    return (
      <>
        <div className={styles.container}>
          <video className={styles.video} autoPlay muted loop>
            <source src={"/video/homepage_video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay}></div>
          <div className={styles.videoText}>
            {currentText.map((word, index) => (
              <span
                key={index}
                className={`${styles.switchText} ${
                  animating ? styles.animating : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
          <p className={styles.description}>
            Relax and discover moments of beauty and reflection.
          </p>
        </div>
        <div className="content">
          <div className="title">
            <p className={styles.subtitle}>Haikus</p>
          </div>
          <HaikuGrid haikus={haikus} authorDisplayed={false}/>
        </div>
      </>
    );
}

export default HomePageComponent