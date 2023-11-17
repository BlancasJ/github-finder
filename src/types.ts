export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface UserData {
  login: string;
  id: number;
  node_id: string,
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: unknown | null,
  bio: string;
  twitter_username: string | null,
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
