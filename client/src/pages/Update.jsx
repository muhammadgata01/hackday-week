import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../libs/constants';
import BaseButton from '../components/base/BaseButton';

function Create() {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const params = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/posts/${params.id}`).then(response => {
      const result = response.data;
      setTitle(result.title);
      setTag(result.tag);
      setSnippet(result.snippet);
      setBody(result.body);
      setImage(result.image);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const postPost = { title, tag, snippet, body, image };

    axios.put(`${baseUrl}/posts/${params.id}`, postPost).then(() => {
      alert('Update successful');
    });
  };

  return (
    <main className="flex justify-center">
      <div className="w-6/12">
        <h1 className="mb-6">Update Post</h1>
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
          <BaseButton type="submit" color="bg-emerald-500">
            Submit
          </BaseButton>
        </form>
      </div>
    </main>
  );
}

export default Create;
