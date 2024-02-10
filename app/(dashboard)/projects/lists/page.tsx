import Link from "next/link";

export default function ProjectList() {
  return (
    <main>
      <h1>ProjectList</h1>

      <ul>
        <li>
          <Link href="/projects/carrent">carrent</Link>
        </li>
        <li>
          <Link href="/projects/hipnote">hipnote</Link>
        </li>
        <li>
          <Link href="/projects/jobit">jobit</Link>
        </li>
      </ul>
    </main>
  );
}
