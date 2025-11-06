import App from './App';
import { Counter } from './components/counter/Counter';
import FormPage from './components/forms/Forms';
import LoginPage from './components/forms/LoginPage';
import NotFoundPage from './components/not-found/NotFoundPage';
import { Post } from './components/post/Post';
import PostByNumberPage from './components/posts/PostByNumberPage';
import PostsPage from './components/posts/PostsPage';
import Users from './components/user/Users';
import { createBrowserRouter } from 'react-router-dom';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/forms',
    element: <FormPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:id',
    element: <PostByNumberPage />,
  },
  {
    path: '/users',
    element: <Users />,
  },
]);
