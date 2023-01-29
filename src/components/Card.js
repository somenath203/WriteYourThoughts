import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';


import { auth, db } from "../firebase/config";



const Card = ({ post }) => {

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const allPostsRef = collection(db, 'posts');

  const getAllPosts = async () => {

    try {
      
      const data = await getDocs(allPostsRef);

      return data;

    } catch (error) {
      
      toast.error(toast.error(`Firebase ${error.message}. Please try again later.`));
      
    }

  };

  const handleDeleteThought = async (id) => {

    const document = doc(db, "posts", id);

    await deleteDoc(document);

    getAllPosts();

  }

  return (
    <div className="card">

      <p className="title">{post.title}</p>

      <p className="description">{post.description}</p>

      <p className="control">
        <span className="author">{post.author.email}</span>
        {isAuth && (post.author.id === auth.currentUser.uid) && <span onClick={() => handleDeleteThought(post.author.id)} className="delete"><i className="bi bi-trash3"></i></span>}
      </p>

    </div>
  )
};

export default Card;