import {
  CommentsList,
  CommentsSkeleton,
  PostInfoCard,
  PostInfoSkeleton,
} from "@/app/components/PostInfo";
import React, { Suspense } from "react";

export default function page({ params }: { params: { postID: string } }) {
  return (
    <>
      <Suspense fallback={<PostInfoSkeleton />}>
        <PostInfoCard id={params.postID} />
      </Suspense>

      <Suspense fallback={<CommentsSkeleton />}>
        {<CommentsList id={params.postID} />}
      </Suspense>
    </>
  );
}
