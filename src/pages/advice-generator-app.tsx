import Head from "next/head";
import Card from "../components/Card";

export default function AdviceGeneratorApp() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      <main>
        <h1 className="sr-only">Advice Generator App</h1>
        <div className="container">
          <Card />
        </div>
      </main>
    </>
  );
}
