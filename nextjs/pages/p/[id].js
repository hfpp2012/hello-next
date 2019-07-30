import { useRouter } from "next/router";
import Layout from "../../layouts/basic";

export default function p() {
  const router = useRouter();
  return (
    <Layout>
      <div>page {router.query.id}</div>
    </Layout>
  );
}
