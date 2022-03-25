import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { getOnePosts } from '../../store/Actions/PostActions';

// Utils
import dateFormat from '../../Services/Utils/dateFormat';

const ArticlesDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const post = useSelector(state => state.Post.post);

  useEffect(() => {
    dispatch(getOnePosts(params.id));
  }, []);

  return (
    <article className="flex flex-col gap-12 py-10">
      <div className="flex flex-col items-center">
        <span>
          {post.tag} &bull; {dateFormat(post.updatedAt)}
        </span>
        <h2 className="my-4 w-10/12 text-center lg:w-6/12">{post.title}</h2>
        <div className="flex items-center gap-4">
          <img
            src={
              'https://ik.imagekit.io/3t4mp2a1w30/people-2_x7LdW9sH0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647621791626'
            }
            className="h-14 w-14"
            alt="Image Profile"
          />
          <div>
            <h6>Muhammad Gata</h6>
            <span>IP Probation</span>
          </div>
        </div>
      </div>
      <figure className="flex justify-center">
        <img
          src={post.image}
          className="h-[26rem] w-full lg:w-8/12 rounded-xl"
          alt="Image Detail"
        />
      </figure>
      <div className="flex flex-col items-center gap-6">
        <p className="w-10/12 lg:w-8/12">{post.body}</p>
      </div>
    </article>
  );
};

export default ArticlesDetail;
