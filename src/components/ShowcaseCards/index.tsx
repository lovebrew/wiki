import clsx from "clsx";

import { sortedShowcase, ShowcaseItem, Console } from "@site/src/data/showcase";
import ShowcaseCard from "../ShowcaseCard";

import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

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

function haveCommonItem(filter: Array<Console>, data: Array<Console>): boolean {
  const set = new Set(filter);
  return data.some(item => set.has(item));
}

export default function ShowcaseCards({ filter }: { filter: Array<Console> }) {
  const filteredShowcase = sortedShowcase.filter((item) => haveCommonItem(filter, item.consoles));
  const noFilteredGames = filteredShowcase.length === 0 && filter.length > 0;

  return (
    <section className="magin-top--lg margin-bottom--xl">
      <div className={clsx(styles.showcaseContainer, noFilteredGames ? "text--center" : "")}>
        {
          (filter.length === 0) ?
            <CardList items={sortedShowcase} /> :
            (!noFilteredGames) ?
              <CardList items={filteredShowcase} /> :
              <h2>No gamez (╥﹏╥)</h2>
        }
      </div>
    </section>
  )
}
