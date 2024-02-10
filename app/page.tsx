import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/projects/lists">See Project</Link>
      <Link href="/sign-in">Sign-in </Link>
      <h1>Home</h1>
    </main>
  );
}
