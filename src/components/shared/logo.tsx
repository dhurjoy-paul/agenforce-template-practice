import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-1 text-[17px]", className)}
    >
      <LogoIcon className="dark:hidden" fill="#1A1A1A" />
      <LogoIcon className="hidden dark:block" fill="#FFFFFF" />
      <span className="font-geist-mono font-normal text-foreground leading-[140%]">
        Agenforce
      </span>
    </Link>
  );
}

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1.33em"
      height="1em"
      viewBox="0 0 20 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.92285 14.7695H0V9.84668H4.92285V14.7695ZM19.6924 14.7695H9.84668V9.84668H4.92383V4.92285H9.84668V0H19.6924V14.7695ZM9.84668 9.84668H14.7695V4.92383H9.84668V9.84668ZM4.92285 4.92285H0V0H4.92285V4.92285Z" />
    </svg>
  );
};

// <svg
//   width="27"
//   height="20"
//   viewBox="0 0 27 20"
//   xmlns="http://www.w3.org/2000/svg"
//   {...props}
// >
//   <path d="M6.56445 19.6924H0V13.1279H6.56445V19.6924ZM26.2559 19.6924H13.1289V13.1289H6.56445V6.56445H13.1279V0H26.2559V19.6924ZM13.1289 13.1299H19.6924V6.56543H13.1289V13.1299ZM6.56445 6.56445H0V0H6.56445V6.56445Z" />
// </svg>
