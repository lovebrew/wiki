export type ShowcaseItem = {
  title: string;
  author: string;
  description: "",
  preview: string | null;
  source: string;
};

const Showcase: Array<ShowcaseItem> = [
  {
    title: "Taśman Quest",
    author: "Nawias",
    description: "Jest to gra polegająca na zrujnowaniu lokalnego sklepu spożywczego i zaklejeniu jak największej ilości jego rzeczy w określonym czasie.",
    preview: require("/showcase/tasmanquest.png"),
    source: "https://nawias.itch.io/tasmanquest"
  }
];


function sortShowcase() {
  return Showcase.sort((a, b) => a.title.localeCompare(b.title));
}

export const sortedShowcase = sortShowcase();
