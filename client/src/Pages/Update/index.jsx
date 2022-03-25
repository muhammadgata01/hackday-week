import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Api
import axios from 'axios';
import { baseUrl } from '../../Services/Constants';

// Components
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Textarea from '../../Components/Textarea/Textarea';
import Modal from '../../Components/Modal/Modal';

const Update = () => {
  const params = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: '',
    tag: '',
    snippet: '',
    body: '',
    image: '',
  });

  useEffect(() => {
    axios.get(`${baseUrl}/posts/${params.id}`).then(response => {
      const result = response.data;
      setForm({
        title: result.title,
        tag: result.tag,
        snippet: result.snippet,
        body: result.body,
        image: result.image,
      });
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`${baseUrl}/posts/${params.id}`, form).then(() => {
      setModalOpen(true);
      navigate('/dashboard');
    });
  };

  return (
    <main className="flex justify-center">
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          message="Successfuly update post !"
        />
      )}

      <div className="w-10/12 lg:w-6/12">
        <h1 className="mb-6">Update Post</h1>
        <form onSubmit={handleSubmit}>
          <Input
            valueLabel="Title"
            valueInput={form.title}
            onInputChange={e => setForm({ ...form, title: e.target.value })}
          />

          <Input
            valueLabel="Tag"
            valueInput={form.tag}
            onInputChange={e => setForm({ ...form, tag: e.target.value })}
          />

          <Textarea
            valueLabel="Snippet"
            valueRow="3"
            valueTextarea={form.snippet}
            onTextareaChange={e =>
              setForm({ ...form, snippet: e.target.value })
            }
          />

          <Textarea
            valueLabel="Body"
            valueRow="6"
            valueTextarea={form.body}
            onTextareaChange={e => setForm({ ...form, body: e.target.value })}
          />

          <Input
            valueLabel="Image"
            valueInput={form.image}
            onInputChange={e => setForm({ ...form, image: e.target.value })}
          />

          <div className="flex gap-2">
            <Button type="submit" color="bg-emerald-500">
              Submit
            </Button>
            <Link to="/dashboard">
              <Button color="bg-neutral-500">Back</Button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Update;
