import './Counter.css';

import { Button, Card, CardBody } from '@backstage/ui';
import { useEffect, useState } from 'react';

import { Alert } from '@mui/material';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    // The code that we want to run
    console.log('The count is: ', counter);

    // Optional return function: cleanup function
    return () => {
      console.log('Clean up function: ', counter);
    };
  }, [counter]); // The dependencies array

  return (
    <Card className='counter-card'>
      <CardBody>
        <h1>Counter</h1>
        <Alert severity='success'>
          Here is a gentle confirmation that your action was successful.
        </Alert>
        <h2 className='counter-value'>{counter}</h2>

        <div className='counter-card-buttons'>
          <Button onClick={increment} variant='primary'>
            + Increment
          </Button>
          <Button onClick={decrement} variant='secondary'>
            - Decrement
          </Button>
          <Button onClick={resetCounter} className='reset-button'>
            Reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
