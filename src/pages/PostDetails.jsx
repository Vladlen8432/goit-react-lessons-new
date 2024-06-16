import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { NavLink, Routes } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import PostComments from './PostComments';

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setisLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPostDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <div>
      <h1>Post details</h1>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {postDetails !== null && (
        <div>
          <h2>{postDetails.title}</h2>
          <h3>PostId: {postDetails.id}</h3>
          <code>{postDetails.body}</code>
        </div>
      )}
      <div>
        <NavLink className="header-link" to="comments">
          Comments
        </NavLink>
      </div>
      <Routes>
        <Route path="comments" element={<PostComments />} />
      </Routes>
    </div>
  );
};

export default PostDetails;
