import Link from "next/link";

export default function index() {
  return (
    <div>
      <p>index page</p>
      <Link href="/users/profile">
        <a>user profile page</a>
      </Link>
    </div>
  );
}
