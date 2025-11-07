export interface ToDoAPIResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchToDos(): Promise<ToDoAPIResponse[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return await response.json();
}
