import { iconMap } from "@/data/blog";

interface BlogAuthorAvatarProps {
  avatarKey: string;
  colorClass: string;
  size?: "sm" | "md";
}

export default function BlogAuthorAvatar({
  avatarKey,
  colorClass,
  size = "md",
}: BlogAuthorAvatarProps) {
  const Icon = iconMap[avatarKey];
  const sizeMap = {
    sm: { wrapper: "w-7 h-7", icon: "w-3.5 h-3.5" },
    md: { wrapper: "w-9 h-9", icon: "w-4 h-4" },
  };

  return (
    <div
      className={`${sizeMap[size].wrapper} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{ background: "linear-gradient(135deg, #e8f5e8, #b3d0b3)" }}>
      {Icon && <Icon className={`${sizeMap[size].icon} ${colorClass}`} />}
    </div>
  );
}
