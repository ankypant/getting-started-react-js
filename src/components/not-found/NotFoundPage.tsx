import { Link } from '@mui/material';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href='/'>Go to home</Link>
    </div>
  );
};

export default NotFoundPage;
