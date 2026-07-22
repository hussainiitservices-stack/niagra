import type { CSSProperties } from "react";

type StampBadgeProps = {
  label: string;
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function StampBadge({
  label,
  dark = false,
  className = "",
  style,
}: StampBadgeProps) {
  return (
    <span
      className={`stamp ${dark ? "stamp-dark" : ""} ${className}`.trim()}
      style={style}
    >
      {label}
    </span>
  );
}
