import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Card from '../../Components/Card/Card';
import { getAllPosts } from '../../store/Actions/PostActions';

const Discover = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.Post.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <main>
      <div className="py-4">
        {allPosts.slice(0, 1).map(post => {
          return <Card key={post.id} data={post} isLarge={true} />;
        })}
      </div>
      <section className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.slice(1).map(post => {
          return <Card key={post.id} data={post} />;
        })}
      </section>
    </main>
  );
};

export default Discover;
