import React, { useState } from "react";
import Axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await Axios.post('http://localhost:4000/posts', { title });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
