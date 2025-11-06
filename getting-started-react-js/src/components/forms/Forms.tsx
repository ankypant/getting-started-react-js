import { Alert, AlertTitle } from '@mui/material';
import { Card, CardBody, Flex } from '@backstage/ui';
import { Controller, useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

const FormPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur', // Validate on blur (can also use 'onChange', 'onSubmit', 'onTouched', 'all')
  });

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form submitted:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically make an API call
      // const response = await loginAPI(data.email, data.password);

      setSubmitStatus('success');

      // Optional: Reset form after successful submission
      // reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <Card>
      <CardBody>
        <h1>Login</h1>

        {submitStatus === 'success' && (
          <Alert
            severity='success'
            sx={{ mb: 2 }}
            onClose={() => setSubmitStatus(null)}
          >
            <AlertTitle>Success</AlertTitle>
            <p>Login successful. Welcome back!</p>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction='column' gap='20px'>
            {/* Email Field with Controller */}
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email is invalid',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Email'
                  variant='outlined'
                  type='text'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                />
              )}
            />

            {/* Password Field with Controller */}
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Password'
                  variant='outlined'
                  type='password'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                />
              )}
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
          </Flex>
        </form>
      </CardBody>
    </Card>
  );
};

export default FormPage;
