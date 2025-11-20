import { cn } from "@/lib/utils";

export default function SubHeading({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "py-8 max-w-lg font-inter font-medium text-muted-foreground text-base md:text-lg lg:text-xl tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
}
