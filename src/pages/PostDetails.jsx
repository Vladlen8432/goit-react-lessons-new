import { Suspense, lazy } from 'react';
import { useEffect, useRef } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import { NavLink, Routes, Link } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetails } from '../redux/postDetails/postDetails.reducer';
import { selectPostDetails, selectPostDetailsError, selectPostDetailsIsLoading } from '../redux/postDetails/postDetails.selectors';

const PostComments = lazy(() => import('pages/PostComments'));

const PostDetails = () => {
  const { postId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const postDetails = useSelector(selectPostDetails);
  const isLoading = useSelector(selectPostDetailsIsLoading);
  const error = useSelector(selectPostDetailsError);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [postId, dispatch]);

  return (
    <div>
      <h1>Post details</h1>
      <Link to={backLinkRef.current}>Go back</Link>
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostComments />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PostDetails;
