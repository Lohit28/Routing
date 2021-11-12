import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ShopItem() {
  const [post, setPost] = useState("");

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
