import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/posts/schemas/post.schema';

@Injectable()
export class SeedsService {
  posts = [
    {
      title: 'Post1',
      description: 'test1',
      content: 'test1',
      imageUrl: 'http://example.com/image1.jpg',
    },
    {
      title: 'Post2',
      description: 'test2',
      content: 'test2',
      imageUrl: 'http://example.com/image2.jpg',
    },
  ];

  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async seedPosts() {
    for (const post of this.posts) {
      const existingPost = await this.postModel.findOne({ title: post.title });
      if (!existingPost) {
        await this.postModel.create(post);
      }
    }
  }
}
