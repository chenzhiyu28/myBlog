import React from "react";

export default function Userpage() {
  return (
    <>
      <h1 className="page-title">
        <SimpleSkeletonText resolve={userPromise}>
          {(user) => user.name}
        </SimpleSkeletonText>
      </h1>
      <div className="page-subtitle">
        <SimpleSkeletonText resolve={userPromise}>
          {(user) => user.email}
        </SimpleSkeletonText>
      </div>
      <div>
        <b>Company:</b>{" "}
        <SimpleSkeletonText resolve={userPromise}>
          {(user) => user.company.name}
        </SimpleSkeletonText>
      </div>
      <div>
        <b>Website:</b>{" "}
        <SimpleSkeletonText resolve={userPromise}>
          {(user) => user.website}
        </SimpleSkeletonText>
      </div>
      <div>
        <b>Address:</b>{" "}
        <SimpleSkeletonText resolve={userPromise}>
          {(user) => `${user.address.street} ${user.address.suite}
        ${user.address.city} ${user.address.zipcode}`}
        </SimpleSkeletonText>
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <Await resolve={postsPromise}>
            {(posts) =>
              posts.map((post) => <PostCard key={post.id} {...post} />)
            }
          </Await>
        </Suspense>
      </div>
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
      </ul>
    </>
  );
}
