export interface ToDoAPIResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchToDos(): Promise<ToDoAPIResponse[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  // Simulate a delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await response.json();
}
