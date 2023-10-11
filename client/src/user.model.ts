export interface User {
    [key: string]: string | number | string[] | undefined | null;
    avatar_url: string;
    bio: string;
    username: string;
    name: string;
    location: string;
    titles: string[];
    'favorite-language': string;
    'total-stars': number;
    'highest-starred': number;
    'public-repos': number;
    'perfect-repos': number;
    followers: number;
    following: number;
  }

  export const DEFAULT_USER: User = {
    avatar_url: "",
    bio: "",
    username: "",
    name: "",
    location: "",
    titles: [],
    'favorite-language': "",
    'total-stars': 0,
    'highest-starred': 0,
    'public-repos': 0,
    'perfect-repos': 0,
    followers: 0,
    following: 0
};

export type SelectableUserProperties = 'username' | 'titles' | 'followers' | 'following' | 'public-repos' | 'perfect-repos' | 'total-stars'; 
