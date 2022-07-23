import React from "react";

const CommentList = ({ comments }) => {
  const rederedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{rederedComments}</ul>;
};

export default CommentList;
