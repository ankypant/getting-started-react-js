import type { AppDispatch, RootState } from '../../state/Store';
import { Card, Checkbox, CircularProgress } from '@mui/material';
import { todosFetchAsync, toggleToDo } from '../../state/todos/ToDos';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from '@backstage/ui';
import { useEffect } from 'react';

export const ToDoPage = () => {
  // useSelector is used to select data from the store
  // Loads with the initial state of the store when the component is mounted
  const toDos = useSelector((state: RootState) => state.toDos.data);
  const status = useSelector((state: RootState) => state.toDos.status);
  // Dispatch is used to dispatch actions to the store
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch the toDos from the API using the todosFetchAsync action
    dispatch(todosFetchAsync());
  }, [dispatch]);
  // Handle the toggle of a toDo by id
  const handleToggleToDo = (id: number) => {
    // Dispatch the toggleToDo action "toggleToDo"
    // to the store with the id of the toDo to toggle
    dispatch(toggleToDo(id));
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
                onChange={() => handleToggleToDo(toDo.id)}
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
