export interface CommentT {
  _id: string;
  author: Author;
  videoId: string;
  description: string;
  createdAt: string;
}

interface Author {
  _id: string;
  username: string;
  avatar: string;
}
