export interface Person {
  name: string;
  birth: number;
  death: number | null;
}

export interface SearchResult {
  name: string;
  description: string;
  birthYear: number | null;
  deathYear: number | null;
  imageUrl: string;
}

export interface WikipediaApiResponse {
  pages : Array<Api>
}

export interface Api {
  id : number;
  key : string;
  title : string;
  excerpt : string;
  matched_title : string | null;
  description : string;
  thumbnail : {
    mimetype : string;
    width : number;
    height : number;
    duration : number | null;
    url : string;
  }
}
