import { Counter } from './components/counter/Counter';
import FormPage from './components/forms/Forms';
import { Post } from './components/post/Post';
import { Suspense } from 'react';
import Users from './components/user/Users';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Post />
      </Suspense>
      <FormPage />
      <Users />
    </div>
  );
}

export default App;
