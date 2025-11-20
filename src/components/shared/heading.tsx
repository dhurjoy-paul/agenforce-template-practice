import { cn } from "@/lib/utils";

export default function Heading({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "font-display font-bold text-2xl md:text-4xl lg:text-6xl tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
}
