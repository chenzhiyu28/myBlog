import { getUser } from "@/app/api/users";
import { SimpleSkeletonText } from "@/app/components/Skeleton";
import UserInfo, {
  UserInfoSkeleton,
  UserPost,
  UserPostSkeleton,
} from "@/app/components/UserInfo";
import React, { Suspense } from "react";

export default async function page({
  params: { userID },
}: {
  params: { userID: string };
}) {
  return (
    <>
      <Suspense fallback={<UserInfoSkeleton />}>
        <UserInfo id={userID} />
      </Suspense>

      <Suspense fallback={<UserPostSkeleton />}>
        <UserPost />
      </Suspense>
    </>
  );
}

{
  /* 
<h3 className="mt-4 mb-2">Todos</h3>
<ul>
  <Suspense
    fallback={
      <SkeletonList amount={5}>
        <li>
          <Skeleton short />
        </li>
      </SkeletonList>
    }
  >
    <Await resolve={todosPromise}>
      {(todos) =>
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      }
    </Await>
  </Suspense>
</ul> */
}
