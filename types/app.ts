export type Genre = {
  id: string;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: [];
};

export type Rating = {
  id: string;
  title: string;
  count: number;
  percent: number;
};

export type Game = {
  id: string;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  short_screenshots: [
    {
      id: number;
      image: string;
    }
  ];
  tags: [
    {
      id: number;
      name: string;
      slug: string;
      language: string;
      games_count: number;
      image_background: string;
    }
  ];
  stores: [
    {
      id: number;
      store: {
        id: number;
        name: string;
        slug: string;
        domain: string;
        image_background: string;
        games_count: number;
      };
    }
  ];
  genres: Genre[];
  platforms: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
        image: string | null;
        image_background: string | null;
      };
      released_at: string;
    }
  ];
};
