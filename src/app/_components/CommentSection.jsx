"use client";
import React, { useState } from "react";
import { createComment } from "../_actions/submitAction";
import { deleteComment } from "../_data/comments"; // Import the deleteComment function
import styles from './CommentSection.module.css'; // Import the CSS module

const CommentSection = ({ comments, haikuId }) => {
  const [auteur, setAuteur] = useState("");
  const [text, setText] = useState("");
  const [commentList, setCommentList] = useState(
    Array.isArray(comments) ? comments : []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createComment(formData);
    window.location.reload();
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
      setCommentList(commentList.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className={styles.commentSection}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="hidden" name="haikuId" value={haikuId} />
        <div>
          <label htmlFor="auteur" className={styles.label}>Name:</label>
          <input
            type="text"
            id="auteur"
            name="auteur"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="text" className={styles.label}>Comment:</label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <div>
        <h2 className={styles.commentsHeader}>Comments</h2>
        <ul className={styles.commentsList}>
          {commentList.map((c, index) => (
            <li key={index} className={styles.commentItem}>
              <div className={styles.commentContent}>
                <strong className={styles.commentAuthor}>{c.auteur}</strong>: {c.text}
              </div>
              <button
                onClick={() => handleDelete(c.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;