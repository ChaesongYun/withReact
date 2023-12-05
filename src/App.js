import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // const [text, setText] = useState("");
  // const [edit, setEdit] = useState(false);

  // let content = <div>{text}</div>

  // if(edit){
  //   content = <div>
  //   <input type="text" 
  //     value={text}
  //     onChange={(e)=>{
  //     setText(e.target.value);
  //     console.log(e.target.value);
  //     }}
  //   />
  // </div>
  // }
  // return(
  //   <div>
  //     <div>{content}</div>
  //     <button onClick={()=>(setEdit(!edit))}>수정</button>
  //   </div>
  // )

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios({
      method:'GET', 
      url:'https://jsonplaceholder.typicode.com/posts'
    }).then((res)=>{
      setPosts(res.data);
    })
  })
  return(
    <div>
      <ul>
        {posts.map(post=>{
          <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
