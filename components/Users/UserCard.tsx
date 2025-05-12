import { Calendar, Clock3, EllipsisVertical, Tag, User } from "lucide-react";
import React from "react";

interface UserCardProps {
  initials: string;
  name: string;
  age: string;
  gender: string;
  date: string;
  sessionTime: string;
  userType: string;
  isActive: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  initials,
  name,
  age,
  gender,
  date,
  sessionTime,
  userType,
  isActive,
}) => {
  return (
    <div className="w-full p-3 bg-white border rounded-md flex items-center justify-between">
      <div className="flex gap-3">
        <div className="size-14 rounded-full bg-accent text-primary flex items-center justify-center font-medium">
          {initials}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium">{name}</p>
            <p className="flex items-center gap-1 text-xs text-accent-foreground">
              <User width={12} height={12} color="#A1A1AA" />
              {age} anos, {gender}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-accent-foreground">
            <p className="flex items-center gap-1">
              <Calendar width={12} height={12} color="#A1A1AA" />
              {date}
            </p>
            <p className="flex items-center gap-1">
              <Clock3  width={12} height={12} color="#A1A1AA" />
              {sessionTime}
            </p>
            <p className="flex items-center gap-1">
              <Tag  width={12} height={12} color="#A1A1AA" />
              {userType}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className={`text-xs rounded-full h-5 px-2.5 font-semibold ${isActive ? "bg-accent" : "text-accent-foreground border"}`}>
          {isActive? "Ativo" : "Inativo"}
        </p>
        <button className="size-10 flex items-center justify-center">
          <EllipsisVertical width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

