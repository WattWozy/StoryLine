export interface Person {
  name: string;
  description: string;
  birthYear: number;
  deathYear: number | null;
  BC: string | undefined;
  imageUrl: string;
}

export interface WikipediaApiResponse {
  pages: Array<WikiPageMetaData>
}

export interface WikiPageMetaData {
  id: number;
  key: string;
  title: string;
  excerpt: string;
  matched_title: string | null;
  description: string;
  thumbnail: {
    mimetype: string;
    width: number;
    height: number;
    duration: number | null;
    url: string;
  }
}
