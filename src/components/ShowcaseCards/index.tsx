import clsx from "clsx";

import { sortedShowcase, ShowcaseItem } from "@site/src/data/showcase";
import ShowcaseCard from "../ShowcaseCard";

import styles from "./styles.module.css";

function CardList({ items }: { items: ShowcaseItem[] }) {
  return (
    <div className="container">
      <ul className={clsx("clean-list", styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default function ShowcaseCards() {
  return (
    <section className="magin-top--lg margin-bottom--xl">
      <div className={styles.showcaseContainer}>
        <CardList items={sortedShowcase} />
      </div>
    </section>
  )
}
