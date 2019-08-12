import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
            type="text/css"
            media="screen"
            charSet="utf-8"
          />
        </Head>
        <body className="container">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
