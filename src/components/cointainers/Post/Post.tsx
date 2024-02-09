import {Link, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiPost} from '../../../types';
import axiosApi from '../../../axiosApi';
import Spinner from '../../Spinner/Spinners';
import {format} from 'date-fns';

const Post = () => {
  const params = useParams();

  const [post, setPosts] = useState<ApiPost | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const response = await axiosApi.get<ApiPost | null>('/posts/' + params.id + '.json');
    setPosts(response.data);
    setLoading(false);
  },[params.id]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  let postArea = <Spinner/>;

  if (!loading && post) {
    postArea = (
      <div>
        <span className="text-info"
               style={{fontSize: '11px'}}>Created on: {format(post.createdAt, 'dd.MM.yyyy HH:mm')}
        </span>
          <h1>{post.title}</h1>
        <article>
          {post.description}
        </article>
        <div>
          <button className="btn btn-danger">Delete</button>
          <Link to={'/posts/' + params.id + '/edit'}>Edit</Link>
        </div>
      </div>
    );
  } else if (!loading && !post) {
    postArea = (
      <h1>Not Found</h1>
    );
  }

  return postArea;
};

export default Post;