export interface UserT {
  _id: string;
  username: string;
  email: string;
  subscribers: number;
  suscribedUsers: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  avatar: string;
}

export interface UserLabelT {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  subscribers: number;
}
