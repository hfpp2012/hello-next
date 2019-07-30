import { useRouter } from "next/router";
import Layout from "../layouts/basic";

export default function post(props) {
  const router = useRouter();
  return (
    <Layout>
      <div>post page {router.query.title}</div>
    </Layout>
  );
}
