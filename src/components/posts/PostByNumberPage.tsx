import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchPostByPageNumber,
  type PostAPIResponse,
} from '../../apis/post.api';
import { Card } from '@mui/material';
import { CardBody, CardHeader } from '@backstage/ui';
export const PostByNumberPage = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<PostAPIResponse | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const post = await fetchPostByPageNumber(Number(id));
      setPost(post as PostAPIResponse);
    };
    fetchPost();
  }, [id]);

  return (
    <Card>
      <CardHeader>
        <h1>Post {id}</h1>
      </CardHeader>
      <CardBody>
        <h3 style={{ textTransform: 'capitalize' }}>{post?.title}</h3>
        <p>{post?.body}</p>
      </CardBody>
    </Card>
  );
};

export default PostByNumberPage;
