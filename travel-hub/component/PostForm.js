import React, { useState } from 'react';
import styles from '../styles/PostForm.module.css';

const PostForm = ({ onPostSubmit }) => {
  const [text, setText] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handlePostSubmit = () => {
    if (text.trim() !== '') {

      onPostSubmit({
        text,
        image: imageURL,
      });

      setText('');
      setImageURL('');
    } else {
      alert('Please enter text before posting.');
    }
  };

  return (
    <div className={styles.postForm}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default PostForm;