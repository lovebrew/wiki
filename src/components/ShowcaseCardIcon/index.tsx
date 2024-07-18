import React from 'react';

import { Console } from '@site/src/data/showcase';

import styles from "./styles.module.css";
import clsx from 'clsx';

const TagMap = {
  [Console.NINTENDO_3DS]: styles.showcaseConsoleTag3DS,
  [Console.NINTENDO_SWITCH]: styles.showcaseConsoleTagSwitch,
  [Console.NINTENDO_WIIU]: styles.showcaseConsoleTagWiiU
};

function ShowcaseCardIcon({ item }: { item: Console }) {
  return (
    <div className={clsx(styles.showcaseConsoleTag, TagMap[item], styles.active)}>
      {item}
    </div>
  );
}

export function ShowcaseCardFilterIcon({ item, onClick, active }: { item: Console, onClick: (console: string) => void, active?: boolean }) {
  const isActive = active ? styles.active : "";

  return (
    <button className={clsx("button", styles.showcaseConsoleTag, TagMap[item], isActive, styles.showcaseConsoleTagButton)} onClick={() => onClick(item)}>
      {item}
    </button>
  );
}

export default React.memo(ShowcaseCardIcon);
