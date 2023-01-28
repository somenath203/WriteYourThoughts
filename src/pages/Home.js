import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from './../firebase/config';
import Card from './../components/Card';
import useTitle from './../hooks/useTitle';
import SkeletonCard from './../components/SkeletonCard';


const Home = () => {

  const [posts, setPosts] = useState(new Array(2).fill(false));


  useTitle('Home');


  const allPostsRef = collection(db, 'posts');


  useEffect(() => {

    const getAllPosts = async () => {

      const data = await getDocs(allPostsRef);
  
      setPosts(data.docs.map((document) => {
  
        return { ...document.data(), id: document.id }
  
      }));
  
    };

    getAllPosts();

  }, [allPostsRef]);
  
  
  return (
    <section>
      {posts.length === 0 ? <p className="no-posts">No Thoughts To Display...</p> : posts.map((post, index) => (
        !post ? <div key={index}> <SkeletonCard /> </div> : <div key={index}>
          <Card post={post} />
        </div>
      ))}
    </section>
  )
};

export default Home;