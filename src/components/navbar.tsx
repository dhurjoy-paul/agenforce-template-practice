import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./shared/container";
import Logo from "./shared/logo";

export default function Navbar() {
  return (
    <div className="border-border border-b text-foreground">
      <Container className="flex justify-between items-center py-5">
        <Logo />

        {/* nav menu */}
        <div className="flex items-center gap-13">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-sans font-medium text-sm"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* auth buttons */}
        <div className="flex justify-between items-center gap-4 font-sans font-medium text-sm">
          {/* <Link href="/login">Login</Link> */}
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

const navLinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];
