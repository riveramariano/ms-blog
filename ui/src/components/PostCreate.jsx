import React, { useState } from "react";
import Axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // C:\Windows\System32\drivers\etc > hosts => add in the last line 127.0.0.1 posts.com
    await Axios.post("http://posts.com/posts/create", { title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <button className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
