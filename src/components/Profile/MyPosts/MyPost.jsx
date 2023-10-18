import React from "react";
import s from './MyPost.module.css'

const MyPost = () => {
    return (
    <div className={s.MyPost}>
    <img src="https://images.hdqwalls.com/wallpapers/purple-city-sy.jpg"></img>
        <div className={s.container}>
          Main content
        </div> 
    </div>
  )
}

export default MyPost