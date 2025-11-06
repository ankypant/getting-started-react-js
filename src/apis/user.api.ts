export interface UserAPIResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export async function fetchUsers(): Promise<UserAPIResponse[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
}
