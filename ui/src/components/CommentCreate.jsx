import React, { useState } from "react";
import Axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // C:\Windows\System32\drivers\etc > hosts => add in the last line 127.0.0.1 posts.com
    await Axios.post(`http://posts.com/posts/${postId}/comments`, { content });
    setContent("");
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
