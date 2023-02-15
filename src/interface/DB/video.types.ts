export interface VideoT {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  tags: string[];
  likes: any[];
  dislikes: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  user: VideoUserT;
}

interface VideoUserT {
  _id: string;
  username: string;
  avatar: string;
}
