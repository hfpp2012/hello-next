import Head from "next/head";

export default function App({ children }) {
  return (
    <main>
      <Head>
        <title>with apollo next</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
          type="text/css"
          media="screen"
          charset="utf-8"
        />
      </Head>
      <div className="container">{children}</div>
    </main>
  );
}
