import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./shared/container";
import Heading from "./shared/heading";
import LandingImages from "./shared/landing-images";
import SubHeading from "./shared/sub-heading";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work. <br /> Approvals that keep you safe.
        </Heading>
        <SubHeading>
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>
        <div className="flex items-center gap-3">
          <Button className="shadow-brand">Start a 30-day trial</Button>
          <Button asChild variant="outline">
            <Link href="/demos">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </section>
  );
}
