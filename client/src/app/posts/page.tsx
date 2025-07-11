import { getPosts } from "@/db/posts";
import { getUsers } from "@/db/users";
import { FormGroup } from "@/components/FormGroup";
import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";
import { Suspense } from "react";
import Form from "next/form";

export default function PostsPage({
  searchParams,
}: {
  searchParams: { query: string; userID: string };
}) {
  const { query = "", userID = "" } = searchParams;

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
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <PostGrid />
        </Suspense>
      </div>
    </>
  );
}

async function PostGrid() {
  const posts = await getPosts();

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
