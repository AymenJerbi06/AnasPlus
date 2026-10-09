export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export interface Step {
  number: string;
  text: string;
}

export interface ArticleCard {
  image: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
