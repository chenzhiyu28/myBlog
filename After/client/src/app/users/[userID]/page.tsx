import UserInfo, {
  UserInfoSkeleton,
  UserPost,
  UserPostSkeleton,
  UserTodos,
  UserTodosSkeleton,
} from "@/app/components/UserInfo";
import { Suspense } from "react";

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
        <UserPost id={userID} />
      </Suspense>

      <ul>
        <Suspense fallback={<UserTodosSkeleton />}>
          <UserTodos id={userID} />
        </Suspense>
      </ul>
    </>
  );
}

{
  /*
   */
}
