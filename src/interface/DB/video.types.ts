export interface VideoT {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  tags: string[];
  likes: string[];
  dislikes: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  user: VideoUserT;
}

export interface VideoLabelT {
  _id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  createdAt: string;
  user: VideoLabelUserT;
}

interface VideoUserT {
  _id: string;
  username: string;
  avatar: string;
  subscribers: number;
}

interface VideoLabelUserT {
  _id: string;
  username: string;
  avatar: string;
}
