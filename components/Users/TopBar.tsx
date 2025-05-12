
import React from "react";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <header
      className={`justify-between items-center border-b-[color:var(--base-border,#E4E4E7)] self-stretch flex min-h-[72px] w-full gap-[40px_100px] flex-wrap pr-4 pl-4 bg-white pt-0 pb-4 border-b border-solid max-md:max-w-full ${className}`}
    >
      <div
        className="items-center self-stretch flex gap-3 w-10 my-auto"
      >
        <button
          className="justify-center items-center self-stretch flex min-h-10 w-10 gap-2 h-10 pr-4 pl-4 bg-[rgba(255,255,255,0.00)] my-auto pt-2 pb-4 rounded-full"
          aria-label="Menu"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/07aaf328165e416cb7c746c3ba04bafa/f6f3e239bc228b6e68248f6815d2b09e35ac8f2c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 self-stretch h-10 my-auto"
            alt="Menu icon"
          />
        </button>
      </div>
      <div
        className="items-center self-stretch flex gap-3 my-auto"
      >
        <button
          className="justify-center items-center border border-[color:var(--base-input,#E4E4E7)] self-stretch flex min-h-10 gap-2 w-10 h-10 pr-4 pl-4 bg-[#FFF] my-auto pt-2 pb-4 rounded-full border-solid"
          aria-label="Notifications"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/07aaf328165e416cb7c746c3ba04bafa/bbf6061a8019e89c5f5da24c42a5e604fdb410db?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
            alt="Notifications icon"
          />
        </button>
        <button
          className="justify-center items-center border border-[color:var(--base-input,#E4E4E7)] self-stretch flex min-h-10 gap-2 w-10 h-10 pr-4 pl-4 bg-[#FFF] my-auto pt-2 pb-4 rounded-full border-solid"
          aria-label="Settings"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/07aaf328165e416cb7c746c3ba04bafa/64f8685efbfb1ee13194a60b7e8bc2f2b400d125?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
            alt="Settings icon"
          />
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/07aaf328165e416cb7c746c3ba04bafa/683e2f9be57e1c0391ffa3d34f7286a11a95e910?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-10 self-stretch shrink-0 h-10 my-auto"
          alt="User avatar"
        />
      </div>
    </header>
  );
};

