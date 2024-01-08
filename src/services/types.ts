export enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}

export interface PremiereResponse {
  total: number;
  items: PremiereResponseItem[];
}

export interface PremiereResponseItem {
  kinopoiskId: number;
  nameRu: string | undefined;
  nameEn: string | undefined;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  duration: number | undefined;
  premiereRu: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
