import React from "react";
import clsx from "clsx";

import { Console } from "@site/src/data/showcase";
import ShowcaseCardIcon from "../ShowcaseCardIcon";

function ShowcaseCardIcons({ consoles }: { consoles: Array<Console> }) {
  return (
    <>
      {consoles.map((item) => (
        <ShowcaseCardIcon item={item} />
      ))}
    </>
  )
}

export default React.memo(ShowcaseCardIcons);
