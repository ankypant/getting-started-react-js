import { useEffect, useState } from 'react';
import { fetchPosts, type PostAPIResponse } from '../../apis/post.api';
import { Card } from '@mui/material';
import { Button, CardBody, CardHeader, Flex } from '@backstage/ui';
import { Link } from 'react-router-dom';

export const PostsPage = () => {
  const [posts, setPosts] = useState<PostAPIResponse[]>([]);

  useEffect(() => {
    const postsFunction = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    postsFunction();
  }, []);

  return (
    <Flex direction='column' gap='1rem'>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Card key={post.id} style={{ margin: '0 1rem', padding: '1rem ' }}>
          <CardHeader>
            <h3 style={{ textTransform: 'capitalize' }}>{post.title}</h3>
          </CardHeader>
          <CardBody>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>
              <Button variant='primary'>View Post {post.id}</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default PostsPage;
