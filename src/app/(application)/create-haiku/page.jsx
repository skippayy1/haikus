'use client'
import React from 'react';
import { icons } from '../../_data/icons'; // Adjust the import path as needed
import styles from './create-haiku.module.css';
import { createAction } from '@/app/_actions/submitAction';

const CreateHaiku = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createAction(formData);
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create a New Haiku</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="auteur" className={styles.label}>Auteur</label>
        <input type="text" name="auteur" id="auteur" required className={styles.input} />
        <label htmlFor="text" className={styles.label}>Text</label>
        <textarea name="text" id="text" required className={styles.textarea}></textarea>
        <label htmlFor="icon_index" className={styles.label}>Icon Index</label>
        <select name="icon_index" id="icon_index" required className={styles.select}>
          {icons.map((icon, index) => (
            <option key={index} value={index}>
              {icon.name}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default CreateHaiku;