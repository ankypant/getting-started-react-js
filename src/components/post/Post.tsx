import './Post.css';

import { Button, Card, Flex } from '@backstage/ui';
import { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import {
  fetchPostByPageNumber,
  type PostAPIResponse,
} from '../../apis/post.api';

export const Post = () => {
  const [page, setPage] = useState(1);
  const [postData, setPostData] = useState<PostAPIResponse | null>(null); // Array of posts
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);

      const timeout = setTimeout(async () => {
        const data = await fetchPostByPageNumber(page);
        setPostData(data);
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    };

    loadPosts();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => setPage(page + 1);

  return (
    <Card className='post-card'>
      <h1>Posts</h1>
      <p>Page: {page}</p>
      <Flex direction='row' gap='10px'>
        <Button onClick={handlePreviousPage} variant='primary'>
          Previous
        </Button>
        <Button onClick={handleNextPage} variant='secondary'>
          Next
        </Button>
      </Flex>
      {isLoading && <CircularProgress color='primary' />}
      {!postData && !isLoading && <div>No post found</div>}
      {postData && !isLoading && (
        <Flex key={postData.id} direction='column' gap='small'>
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
        </Flex>
      )}
    </Card>
  );
};
