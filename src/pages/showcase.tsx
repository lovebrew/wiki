import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";

import ShowcaseCards from "../components/ShowcaseCards";

const TITLE = translate({ message: "Projects Showcase" });
const DESCRIPTION = translate({ message: "List of projects using LÖVE Potion" });
const ADD_PROJECT = translate({ message: "Submit Your Project!" });

const BUTTON_TO = "https://github.com/lovebrew/lovebrew.github.io/discussions/categories/show-and-tell";

function ShowcaseHeader(): JSX.Element {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <Link className={clsx("button button--primary")} to={BUTTON_TO}>
        {ADD_PROJECT}
      </Link>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </Layout>
  )
}
