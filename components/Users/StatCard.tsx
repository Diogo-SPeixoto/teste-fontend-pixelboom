import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, className }) => {
  return (
    <div
      className={`min-h-[100px] w-full overflow-hidden font-normal whitespace-nowrap gap-2 bg-neutral-50 mx-auto p-6 rounded-lg max-md:mt-5 max-md:px-5 ${className}`}
    >
      <div
        className="text-zinc-500 font-normal self-stretch w-full gap-2.5 text-xs tracking-[-0.4px] leading-none"
      >
        {title}
      </div>
      <div
        className="text-zinc-900 text-3xl font-normal leading-8 tracking-[-0.8px] w-full gap-2 mt-2"
      >
        {value}
      </div>
    </div>
  );
};
