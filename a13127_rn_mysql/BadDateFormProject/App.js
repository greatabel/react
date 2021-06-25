// import React from 'react';
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

import {StaticRouter as Router, Route} from "react-router-dom";

import { Text, View } from 'react-native';






const YourApp = () => {

const [posts, setPosts] = useState([]);

useEffect(()=>{
Axios.get("http://localhost:3002/api/get").then((data)=>{
	// setPosts([{ id: 0, content: "foo" }, { id: 1, content: "bar" }]);
    setPosts(data.data)
    console.log(posts);
});
},[])




  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        I am BadDateForm !! 🎉
      </Text>

  <Text>email:</Text>
  <Text>{posts.map(post => <Text key={post.bid}>{post.email} {`\t`}  </Text>)} {`\n`} </Text>

   <Text>time_of_incident:</Text>

  <Text>{posts.map(post => <Text key={post.bid}>{post.time_of_incident} {`\t`}  </Text>)} {`\n`} </Text>
    </View>

  );
}

export default YourApp;