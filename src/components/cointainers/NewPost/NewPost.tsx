import {useParams} from 'react-router-dom';

const NewPost = () => {
  const params = useParams();
  return (
    <div>
      {params.id ? 'Edit post' : 'New post'}
    </div>
  );
};

export default NewPost;