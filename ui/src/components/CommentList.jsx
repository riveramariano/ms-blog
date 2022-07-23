import React from "react";

const CommentList = ({ comments }) => {
  const rederedComments = comments.map((comment) => {
    let content = '';

    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'rejected':
        content = "This comment has been rejected";
        break;
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;
      default:
        content = 'An error has happened';
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{rederedComments}</ul>;
};

export default CommentList;
