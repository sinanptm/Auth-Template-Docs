export * from "./props";
export * from "./state";

export enum UserRole {
  Admin = "Admin",
  User = "User",
}
export enum Tokens {
  User = "user_token",
  Admin = "admin_token",
}

export type DateString = Date | string;
export interface IUser {
  readonly _id?: string;
  readonly name?: string;
  readonly email?: string;
  readonly isBlocked?: boolean;
  readonly createdAt?: DateString;
  readonly profile?: string;
}


export interface FolderInfo {
  name: string;
  purpose: string;
  description: string;
  fileTypes: string[];
  layer: string;
  examples: string[];
  keyFeatures?: string[];
  dependencies?: string[];
  codeExample?: {
    filename: string;
    code: string;
    description: string;
  };
}