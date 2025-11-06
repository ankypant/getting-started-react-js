export interface PostAPIResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(page: number): Promise<PostAPIResponse> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${page}`
  );
  return await response.json();
}
