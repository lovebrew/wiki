// File: src/components/ShowcaseCard.js
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';

import { ShowcaseItem } from '@site/src/data/showcase';
import ShowcaseCardIcons from '@site/src/components/ShowcaseCardIcons';

import styles from "./styles.module.css";

const usePicsumImage = (seed?: string, size?: number) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    fetch(`https://picsum.photos/${seed ? 'seed/' + seed : ''}/${size ?? 200}`)
      .then((res) => res.blob())
      .then((blob) => setImage(URL.createObjectURL(blob)));
  }, []);
  return image;
};

function getCardImage(user: ShowcaseItem): string {
  return (user.preview ?? usePicsumImage(user.title, 512)) as string;
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <li key={item.title} className={clsx("card", styles.showcaseCard)}>
      <div className={styles.showcaseCardPreview}>
        <div className={styles.showcaseCardImage}>
          <Image img={getCardImage(item)} alt={item.title} />
        </div>
        <p className={styles.showcaseCardDescription}>{item.description}</p>
      </div>
      <div className="card__body">
        <div className={styles.showcaseCardHeader}>
          <h4 className={styles.showcaseCardTitle}>
            <a className={styles.showcaseCardLink} href={item.source}>{item.title}</a>
          </h4>
          <p className={styles.showcaseCardAuthor}>{item.author}</p>
        </div>
      </div>
      <div className={clsx('card__footer', styles.showcaseCardFooter)}>
        <ShowcaseCardIcons consoles={item.consoles} />
      </div>
    </li>
  );
}

export default React.memo(ShowcaseCard);
