import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CardSkeleton() {
  return Array(8)
    .fill(0)
    .map((item, index) => (
      <div className="card-skeleton px-5" key={index}>
        <div className="top-col">
          <Skeleton width={"100%"} height={"100%"} />
        </div>
        <div className="bottom-col">
          <Skeleton count={8} />
          <Skeleton height={60} />
        </div>
      </div>
    ));
}
