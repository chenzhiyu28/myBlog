import React from "react";
import { Skeleton, SkeletonList } from "../components/Skeleton";

export default function LoadingTodosPage() {
  return (
    <>
      <ul>
        <SkeletonList amount={10}>
          <li>
            <Skeleton short />
          </li>
        </SkeletonList>
      </ul>
    </>
  );
}
