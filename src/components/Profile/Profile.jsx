import React from "react";
import s from './Profile.module.css'
import Post from './MyPosts/Posts/Post';
import MyPost from './MyPosts/MyPost';

const Profile = () => {
    return (
    <div className={s.content}>
      <MyPost />
      <Post message = "Hello, I'm Enot" />
      <Post message = "How are you bro?"/>
    </div>
  )
}

export default Profile