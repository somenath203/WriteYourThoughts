import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from './../firebase/config';
import Card from './../components/Card';
import useTitle from './../hooks/useTitle';
import SkeletonCard from './../components/SkeletonCard';
import Navbar from './../components/Header';
import { toast } from 'react-toastify';


const Home = () => {

  const [posts, setPosts] = useState(new Array(2).fill(false));


  useTitle('Home');


  const allPostsRef = collection(db, 'posts');


  useEffect(() => {

    const getAllPosts = async () => {

      try {
        
        const data = await getDocs(allPostsRef);

        setPosts(data.docs.map((document) => {
  
          return { ...document.data(), id: document.id }
  
        }));

      } catch (error) {
        
        toast.error(`Firebase: ${error.message}. Please try again later.`);
        
      }

    };

    getAllPosts();

  }, [allPostsRef]);


  return (
    <>
      <Navbar />
      <section>
        {posts.length === 0 ? <p className="no-posts">No Thoughts To Display...</p> : posts.map((post, index) => (
          !post ? <div key={index}> <SkeletonCard /> </div> : <div key={index}>
            <Card post={post} />
          </div>
        ))}
      </section>
    </>
  )
};

export default Home;