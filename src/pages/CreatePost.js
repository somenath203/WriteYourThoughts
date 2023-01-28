import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { db, auth } from './../firebase/config';
import useTitle from './../hooks/useTitle';


const CreatePost = () => {

  const postReference = collection(db, 'posts');

  useTitle('CreateThought')


  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [creatingPost, setCreatingPost] = useState('');

  const navigate = useNavigate();


  const onSubmitPost = async (e) => {

    e.preventDefault();

    const newlyCreatedDocument = {
      title: title,
      description: description,
      author: {
        email: auth.currentUser.email,
        id: auth.currentUser.uid 
      }
    };

    setCreatingPost(true);

    await addDoc(postReference, newlyCreatedDocument); 

    setCreatingPost(false);

    toast.success('your thought has been created successfully');

    navigate('/');

  };

  return (
    <section className="create">

      <div className="heading">
        <h1>Add Your Thought</h1>
      </div>

      <form className="createPost" onSubmit={onSubmitPost}>

        <input
          type="text"
          className="title"
          placeholder="enter the title of your thought"
          onChange={(e) => setTitle(e.target.value)}
          required

        />

        <textarea
          type='text'
          className="description"
          placeholder="describe your thought in detail"
          onChange={(e) => setDescription(e.target.value)}
          required></textarea>

        <button className="submit">{creatingPost ? 'Creaitng...' : 'Create'}</button>

      </form>

    </section>
  )
};

export default CreatePost;