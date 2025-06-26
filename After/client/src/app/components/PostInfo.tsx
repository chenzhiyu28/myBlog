import React from "react";
import { SimpleSkeletonText, Skeleton, SkeletonList } from "./Skeleton";
import { PostCard, SkeletonPostCard } from "./PostCard";
import { Post, getPostById, getPosts } from "../api/posts";
import { getCommentsByPostId } from "../api/comments";
import Link from "next/dist/client/link";
import { getUserById } from "../api/users";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
}

export function PostListSkeleton() {
  return (
    <>
      <SkeletonList amount={6}>
        <SkeletonPostCard />
      </SkeletonList>
    </>
  );
}

export async function CommentsList({ id }: { id: string }) {
  const comments = await getCommentsByPostId(id);

  return (
    <>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CommentsSkeleton() {
  return (
    <>
      <h3 className="mt-4 mb-2">Comments Loading</h3>

      <SkeletonList amount={5}>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">
              <Skeleton short />
            </div>
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </SkeletonList>
    </>
  );
}

export async function PostInfoCard({ id }: { id: string }) {
  const post: Post = await getPostById(id);
  const userId = post.userId;
  const userName = (await getUserById(userId)).name;

  return (
    <>
      <h1 className="page-title">{post.title}</h1>

      <span className="page-subtitle">
        By: {<Link href={`/users/${userId}`}>{userName}</Link>}
      </span>

      {post.body}
    </>
  );
}

export function PostInfoSkeleton() {
  return (
    <>
      <h1 className="page-title">
        <Skeleton short inline />
      </h1>

      <span className="page-subtitle">
        By: <Skeleton short inline />
      </span>

      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
}
