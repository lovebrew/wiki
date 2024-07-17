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
    description: "Join Taśman in his quest to wrap everything in TAŚMAN Sealed duct tape! Flex your tape-wrapping skills as the clock is ticking!",
    preview: require("/showcase/tasmanquest.png"),
    source: "https://nawias.itch.io/tasmanquest"
  }
];


function sortShowcase() {
  return Showcase.sort((a, b) => a.title.localeCompare(b.title));
}

export const sortedShowcase = sortShowcase();
