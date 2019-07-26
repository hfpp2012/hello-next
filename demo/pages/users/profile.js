import Link from "next/link";

export default function profile() {
  return (
    <div>
      <p>user profile page</p>
      <p>
        <Link href="/">
          <a>back home</a>
        </Link>
      </p>
    </div>
  );
}
