import React, { Suspense } from "react";
import PostList, { PostListSkeleton } from "../components/PostInfo";

export default function PostPage() {
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        <Suspense fallback={<PostListSkeleton />}>{<PostList />}</Suspense>
      </div>
    </>
  );
}
