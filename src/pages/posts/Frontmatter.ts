export interface Frontmatter {
  tags: string[];
  title: string;
  image: {
    url: string;
    alt: string;
  };
  author: string;
  description: string;
  pubDate: string
}
