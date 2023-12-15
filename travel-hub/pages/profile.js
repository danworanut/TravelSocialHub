
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Profile.module.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'I love coding!',
    skills: ['JavaScript', 'React', 'Next.js'],
    socialLinks: [
      { platform: 'GitHub', username: 'john-doe' },
      { platform: 'Facebook', username: 'john.doe' },
    ],
    posts: [
      {
        id: 1,
        likes: 10,
        comments: 5,
        shares: 3,
        title: "This is the first post.",
        description: "rewrdfgsf gfdgsdfgsdgfsdgsfgf",
        image: 'https://www.chillpainai.com/src/wewakeup/scoop/images/3996e4797d73adc4223c1e21f47cbddc1c0a375c.jpg',
        author: "John Doe",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvd5gxWH0xU5qUTp71Ssg3d8MtP46PDEVDA&usqp=CAU",
        postTime: "2 hours ago",

      },
      {
        id: 2,
        likes: 10,
        comments: 5,
        shares: 3,
        title: "This is the first post.",
        description: "rewrdfgsf gfdgsdfgsdgfsdgsfgf",
        image: 'https://www.ktc.co.th/pub/media/Article/02/Ban-Rak-Thai.webp',
        author: "John Doe",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvd5gxWH0xU5qUTp71Ssg3d8MtP46PDEVDA&usqp=CAU",
        postTime: "2 hours ago",
      },
    ],
  });

  return (
    <>
    <div className={styles.profileContainer}>
      <Head>
        <title>{profileData.name}'s Profile</title>
      </Head>
      <div className={styles.profileHeader}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvd5gxWH0xU5qUTp71Ssg3d8MtP46PDEVDA&usqp=CAU" alt="Profile Picture" className={styles.profilePicture} />
        <div>
          <div className={styles.profileName}>{profileData.name}</div>
          <div>Email: {profileData.email}</div>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <h2>Social Links</h2>
        <ul>
          {profileData.socialLinks.map((link, index) => (
            <li key={index}>
              {link.platform}: <a href={`https://www.${link.platform.toLowerCase()}.com/${link.username}`} target="_blank" rel="noopener noreferrer">{link.username}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div>
   
        
        <div  className={styles.profileContainer} >
          
          <h2 className={styles.header}>My Posts</h2>
                {profileData.posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <h2 className={styles.postContent}>{post.title}</h2>
            <div className={styles.postContent}>{post.description}</div>
            {post.image && <img src={post.image} alt="Post Image" className={styles.postImage} />}
            <div className={styles.postActions}>
              <button>{post.likes} Likes</button>
              <button>{post.comments} Comments</button>
              <button>{post.comments} Shares</button>
            </div>
          </div>
        ))}
      </div>
    </div>  
</>
  );
};

export default Profile;
