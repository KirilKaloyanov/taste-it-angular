export type TCategory = { name: string; _id: number };

export type TComment = {
  comment: string;
  createdAt: Date;
  user: string;
  _id: number;
};

export type TLike = { like: boolean; user: string; _id: number };

export type TRecipe = {
  category: TCategory;
  comments: TComment[];
  ingredients: { id: number; ingredient: string }[];
  likes: TLike[];
  methods: { id: number; method: string }[];
  name: string;
  numberOfServings: number;
  userId: { username: string };
  _id: number;
};
