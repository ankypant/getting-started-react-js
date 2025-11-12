import { Card, Checkbox, CircularProgress } from '@mui/material';

import { Flex } from '@backstage/ui';
import { useEffect } from 'react';
import { useTodosStore } from '../../store/todosStore';

export const TodosPage = () => {
  // useSelector equivalent: select data from the Zustand store
  const toDos = useTodosStore((state) => state.data);
  const status = useTodosStore((state) => state.status);
  // Get actions from the Zustand store
  const fetchTodos = useTodosStore((state) => state.fetchTodos);
  const toggleTodo = useTodosStore((state) => state.toggleTodo);

  useEffect(() => {
    // Fetch the toDos from the API using the fetchTodos action
    fetchTodos();
  }, [fetchTodos]);

  // Handle the toggle of a toDo by id
  const handleToggleTodo = (id: number) => {
    // Call the toggleTodo action from the store
    toggleTodo(id);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <h1>ToDos</h1>
      {status === 'loading' && <CircularProgress color='primary' />}
      {status === 'success' &&
        toDos.map((toDo) => (
          <Card key={toDo.id} style={{ padding: '1rem' }}>
            <h3 style={{ textTransform: 'capitalize' }}>Title: {toDo.title}</h3>
            <p>
              ID: <strong>{toDo.id}</strong> <br />
              User ID: <strong>{toDo.userId}</strong> <br />
              Completed:{' '}
              <strong style={{ color: toDo.completed ? 'green' : 'red' }}>
                {toDo.completed ? 'Yes' : 'No'}
              </strong>
            </p>
            <Flex direction='row' gap='1rem'>
              <Checkbox
                checked={toDo.completed}
                onChange={() => handleToggleTodo(toDo.id)}
                sx={{
                  color: toDo.completed ? 'success.main' : 'error.main',
                  '&.Mui-checked': {
                    color: 'success.main',
                  },
                }}
              />
            </Flex>
          </Card>
        ))}
    </div>
  );
};
