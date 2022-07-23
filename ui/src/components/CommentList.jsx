/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await Axios.get(`http://localhost:4002/posts/${postId}/comments`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const rederedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{rederedComments}</ul>;
};

export default CommentList;
