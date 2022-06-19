import Head from "next/head";
import Card from "../components/Card";

export default function AdviceGeneratorApp() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      <main>
        <div className="container">
          <Card />
        </div>
      </main>
    </>
  );
}
