import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto px-4 [1280px]:px-0 max-w-7xl", className)}>
      {children}
    </div>
  );
}
