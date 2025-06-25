export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data = await res.json();
  return data as Post[];
}

export async function getPostByID(postId: number) {
  const res = await fetch(`${process.env.API_URL}/post/${postId}`);
  const data = await res.json();
  return data as Post;
}

