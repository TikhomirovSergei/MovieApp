export enum Month {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER'
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
