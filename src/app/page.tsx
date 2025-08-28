"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@stackframe/stack";
import Link from "next/link";

export default function LandingPage() {
  const user = useUser({ or: "anonymous" });
  console.log(user?.id);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-4xl font-bold">The best todo app ever</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button asChild>
          <Link href="/todos">Get Started now</Link>
        </Button>
        <p className="text-sm text-muted-foreground">no sign up required</p>
      </div>
    </div>
  );
}
