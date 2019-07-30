import Layout from "../layouts/basic";
import Link from "../src/Link";

export default function index() {
  return (
    <Layout>
      <div>index page</div>

      <p>
        <Link href={`/p/[id]`} as="/p/1">
          page 1
        </Link>
      </p>

      <p>
        <Link href={`/p/[id]`} as="/p/2">
          page 2
        </Link>
      </p>

      <p>
        <Link href={`/post?title=first title`}>first title</Link>
      </p>

      <p>
        <Link href={`/post?title=second title`}>second title</Link>
      </p>

      <p>
        <Link href={`/post?title=third title`}>third title</Link>
      </p>
    </Layout>
  );
}
