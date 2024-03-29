import Head from 'next/head'
import Post from '@/component/Post'
import { posts } from '@/data';
import { useState } from 'react';
import PostForm from '@/component/PostForm';




export default function Home() {

  const [postList, setPostList] = useState(posts);

const handlePostSubmit = (newPost) => {
  setPostList([newPost, ...postList]);
};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <PostForm className="form" onPostSubmit={handlePostSubmit} />

      <div>
      {posts.map(post => (
        <Post
        key={post.id}
        id={post.id}
        title={post.title}
        description={post.description}
        author={post.author}
        authorImage={post.authorImage}
        postImage={post.image}
        postTime={post.postTime}
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
        />
      ))}
    </div>
     
        
      </main>
    </>
  )
}
