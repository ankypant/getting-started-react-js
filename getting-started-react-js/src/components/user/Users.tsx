import { fetchUsers, type UserAPIResponse } from '../../apis/user.api';
import './Users.css';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@backstage/ui';

export const Users = () => {
  const [users, setUsers] = useState<UserAPIResponse[]>([]);

  useEffect(() => {
    const usersFunction = async () => {
      const users = await fetchUsers();
      setUsers(users);
    };

    usersFunction();
  }, []);

  return (
    <Card>
      <CardBody>
        <h1>Users</h1>
        {users.length > 0 &&
          users.map((user) => (
            <Card key={user.id} className='user-card'>
              <CardHeader>
                <h3>{user.name}</h3>
              </CardHeader>
              <CardBody>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>
                  {user.address.street}, {user.address.city}{' '}
                  {user.address.zipcode}
                </p>
              </CardBody>
            </Card>
          ))}
      </CardBody>
    </Card>
  );
};

export default Users;
