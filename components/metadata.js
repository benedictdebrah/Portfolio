import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{"Benedict D."}</title>
      <link rel="icon" href="/code.png" />
      <link rel="apple-touch-icon" href="/code.png" />
      <meta name="title" content={"Benedict D."} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={"Benedict D."} />
      <meta
        name="theme-color"
        content="currentColor"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
};
export default Metadata;
