import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.post}>
      <div className={s.item}>
        <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"></img>
        <span>{props.message}</span>
      </div>  
    </div>
  )
}

export default Post