import { getPosts } from "../api/posts";
import { User, getUser } from "../api/users";
import { PostCard, SkeletonPostCard } from "./PostCard";
import { Skeleton, SkeletonList } from "./Skeleton";

export default async function UserInfo({ id }: { id: string | number }) {
  const user: User = await getUser(id);

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>{" "}
        {`${user.address.street} ${user.address.suite}
        ${user.address.city} ${user.address.zipcode}`}
      </div>
    </>
  );
}

export function UserInfoSkeleton() {
  return (
    <>
      <h1 className="page-title">
        <Skeleton short inline />
      </h1>
      <div className="page-subtitle">
        <Skeleton short inline />
      </div>
      <div>
        <b>Company:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Website:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Address:</b> <Skeleton short inline />
      </div>
    </>
  );
}

export async function UserPost() {
  const posts = await getPosts();

  return (
    <>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

export function UserPostSkeleton() {
  return (
    <>
      <SkeletonList amount={3}>
        <SkeletonPostCard />
      </SkeletonList>
    </>
  );
}
