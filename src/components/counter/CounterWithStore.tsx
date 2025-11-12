import './Counter.css';

import { Alert, Button, Card } from '@mui/material';

import { useCounterStore } from '../../store/counterStore';

export const CounterWithStore = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Card style={{ padding: '1rem', margin: '1rem' }}>
      <h1>Counter With Store</h1>
      <Alert severity='success'>
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <h2 className='counter-value'>{count}</h2>

      <div className='counter-card-buttons'>
        <Button onClick={increment} variant='contained' color='primary'>
          + Increment
        </Button>
        <Button onClick={decrement} variant='contained' color='secondary'>
          - Decrement
        </Button>
        <Button onClick={reset} variant='outlined'>
          Reset
        </Button>
      </div>
    </Card>
  );
};
