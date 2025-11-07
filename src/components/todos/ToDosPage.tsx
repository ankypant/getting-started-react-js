import { Card, Checkbox } from '@mui/material';

import { fetchToDos, type ToDoAPIResponse } from '../../apis/todo.api';
import { useEffect, useState } from 'react';
import { Flex } from '@backstage/ui';

export const ToDoPage = () => {
  const [toDos, setToDos] = useState<ToDoAPIResponse[]>([]);

  useEffect(() => {
    const toDosFunction = async () => {
      const toDosResponse = await fetchToDos();
      setToDos(toDosResponse);
    };

    toDosFunction();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <h1>Photos</h1>
      {toDos.map((toDo) => (
        <Card key={toDo.id} style={{ padding: '1rem' }}>
          <h3 style={{ textTransform: 'capitalize' }}>Title: {toDo.title}</h3>
          <p>
            ID: <strong>{toDo.id}</strong> <br />
            Completed:{' '}
            <strong style={{ color: toDo.completed ? 'green' : 'red' }}>
              {toDo.completed ? 'Yes' : 'No'}
            </strong>
          </p>
          <Flex direction='row' gap='1rem'>
            <Checkbox
              checked={toDo.completed}
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
