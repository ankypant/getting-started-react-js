import { type FormEvent, useState } from 'react';
import { Card, CardBody, Flex } from '@backstage/ui';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidate, setIsValidate] = useState<boolean | null>(null);
  const validateForm = () => {
    if (!email) {
      setIsValidate(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setIsValidate(false);
      return;
    }

    if (!password) {
      setIsValidate(false);
    } else if (password.length < 6) {
      setIsValidate(false);
      return;
    }

    setIsValidate(true);

    console.log('isValidate', isValidate);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <Card>
      <CardBody>
        <h1>Login</h1>
        {isValidate === false && (
          <Alert severity='error' sx={{ mb: 2 }}>
            <AlertTitle>Error</AlertTitle>
            <div>Login failed. Please check your email and password.</div>
          </Alert>
        )}
        {isValidate === true && (
          <Alert severity='success' sx={{ mb: 2 }}>
            <AlertTitle>Success</AlertTitle>
            <p>Login successful. Welcome back!</p>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Flex direction='column' gap='20px'>
            <TextField
              variant='outlined'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              variant='outlined'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Login
            </Button>
          </Flex>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginPage;
