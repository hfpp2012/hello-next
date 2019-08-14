import Head from "next/head";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main>
    <Head>
      <title>with apollo next</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
        type="text/css"
        media="screen"
      />
    </Head>
    <div className="container">{children}</div>
  </main>
);

export default App;
