import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Handle api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Import from Components folder
import CustomButton from '../../Components/CustomButton/CustomButton';

const Create = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const postPost = { title, tag, snippet, body, image };

    axios.post(`${baseUrl}/posts`, postPost).then(() => {
      alert('Added successful');
      setTitle('');
      setTag('');
      setSnippet('');
      setBody('');
      setImage('');
    });
  };

  return (
    <main className="flex justify-center">
      <div className="w-10/12 lg:w-6/12">
        <h1 className="mb-6">Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 mb-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="input-style"
              placeholder="Insert title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2 mb-4">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              className="input-style"
              placeholder="Insert tag"
              value={tag}
              onChange={e => setTag(e.target.value)}
            />
          </div>
          <div className="grid gap-2 mb-4">
            <label htmlFor="snippet">Snippet</label>
            <textarea
              id="snippet"
              rows="2"
              className="input-style"
              placeholder="Insert snippet"
              value={snippet}
              onChange={e => setSnippet(e.target.value)}></textarea>
          </div>
          <div className="grid gap-2 mb-4">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              rows="6"
              className="input-style"
              placeholder="Insert body"
              value={body}
              onChange={e => setBody(e.target.value)}></textarea>
          </div>
          <div className="grid gap-2 mb-4">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              className="input-style"
              placeholder="Insert image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <CustomButton type="submit" color="bg-emerald-500">
              Submit
            </CustomButton>
            <Link to="/dashboard">
              <CustomButton type="button" color="bg-neutral-500">
                Back
              </CustomButton>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Create;
