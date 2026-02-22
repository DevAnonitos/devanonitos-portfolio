export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    demo: string;
  };
  category: string;
  featured?: boolean;
}

export interface Research {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}
