export interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
}

export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data = await res.json();
  return data as Post[];
}

export async function getPostByUserID(userId: number|string) {
  const res = await fetch(`${process.env.API_URL}/posts?userId=${userId}`);
  const data = await res.json();
  return data as Post[];
}

export async function getPostById(id: number|string) {
  const res = await fetch(`${process.env.API_URL}/posts/${id}`);
  const data = await res.json();
  return data as Post;
}
