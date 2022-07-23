import React, { useState } from "react";
import Axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await Axios.post(`http://localhost:4002/posts/${postId}/comments`, { content });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input className="form-control" value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
