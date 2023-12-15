import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Post.module.css';

const Post = ({ id, title, description, author, authorImage, postImage, postTime, likes, comments, shares }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img className={styles.authorImage} src={authorImage} alt={`${author}'s profile`} />
        <div className={styles.postDetails}>
          <p className={styles.postAuthor}>{author}</p>
          <p className={styles.postTime}>{postTime}</p>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img className={styles.postImage} src={postImage} alt={title} />
      <div className={styles.actions}>
        <button>
          <span>
            <FontAwesomeIcon className={styles.likeIcon} icon={faThumbsUp} />
            <span className={styles.buttonText}>
              {likes} Likes
            </span>
          </span>
        </button>
        <button>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <span className={styles.buttonText}>
              {comments} Comments
            </span>
          </span>
        </button>
        <button>
          <span>
            <FontAwesomeIcon icon={faShare} />
            <span className={styles.buttonText}>
              {shares} Shares
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Post;