import { getPosts } from "@/db/posts";
import { getUsers } from "@/db/users";
import { FormGroup } from "@/components/FormGroup";
import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";
import { Suspense } from "react";
import Form from "next/form";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; userId?: string }>;
}) {
  const { query = "", userId: userID = "" } = await searchParams;

  return (
    <>
      <h1 className="page-title">Posts</h1>

      <Form action="" className="form mb-4">
        <div className="form-row">
          <FormGroup>
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" defaultValue={query} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId" defaultValue={userID}>
              <Suspense fallback={<option value="">Loading...</option>}>
                <UserSelect />
              </Suspense>
            </select>
          </FormGroup>

          <button className="btn">Filter</button>
        </div>
      </Form>

      <div className="card-grid">
        <Suspense
          key={`${query}-${userID}`}
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <PostGrid userId={userID} query={query} />
        </Suspense>
      </div>
    </>
  );
}

async function PostGrid({ userId, query }: { userId: string; query: string }) {
  const posts = await getPosts({ userId, query });

  return posts.map((post) => <PostCard key={post.id} {...post} />);
}

async function UserSelect() {
  const users = await getUsers();

  return (
    <>
      <option value="">Any</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </>
  );
}
