// import React from 'react';
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

import {StaticRouter as Router, Route} from "react-router-dom";

import { Text, View,Button, Alert } from 'react-native';






const YourApp = () => {

const [posts, setPosts] = useState([]);

useEffect(()=>{
    // rn 怎么查询数据库数据的
Axios.get("http://localhost:3002/api/get").then((data)=>{
	// setPosts([{ id: 0, content: "foo" }, { id: 1, content: "bar" }]);
  //怎么设置上到组件上，把查询到数据
    setPosts(data.data)
    console.log(posts);
});
},[])


const submitPost = () => {
  // rn 怎么调用增加数据的 后台数据库
Axios.post('http://localhost:3002/api/create', 
  {email: 'haha1@126.com', bad_date: '2021-06-20', time_of_incident:'evening',picked_up_by: 'taxi',how_arranged: 'phone'})
}


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        I am BadDateForm !! 🎉
      </Text>

  <Text>email:</Text>
  <Text>{posts.map(post => <Text key={post.bid}>{post.email} {`\t`}  </Text>)} {`\n`} </Text>

   <Text>time_of_incident:</Text>

  <Text>{posts.map(post => <Text key={post.bid}>{post.encrypt_incident} {`\t`}  </Text>)} {`\n`} </Text>

      <Button
        title="Press me"
        onPress={() => submitPost() }
      />
    </View>

  );
}

export default YourApp;