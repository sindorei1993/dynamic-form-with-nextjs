import React from "react";

interface SkeletonProps {
  rows: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ rows }: SkeletonProps) => {
  return (
    <div className="animate-pulse space-y-4 w-full max-w-md mb-4 min-w-sm">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-10 bg-gray-300 rounded"></div>
      ))}
    </div>
  );
};

export default Skeleton;
