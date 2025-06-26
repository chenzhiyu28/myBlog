interface Comment {
  id: string | number;
  body: string;
  email: string;
}

export async function getCommentsByPostId(postId: string | number) {
  const url = `${process.env.API_URL}/posts/${postId}/comments`;
  const res = await fetch(url);
  const data = await res.json();
  return data as Comment[];
}
