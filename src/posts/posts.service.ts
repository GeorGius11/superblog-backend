import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = await this.postModel.create(createPostDto);
    return createdPost;
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<{ data: Post[]; total: number }> {
    const total = await this.postModel.countDocuments();
    const data = await this.postModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    return { data, total };
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();

    if (!post) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const updatedPost = await this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }

    return updatedPost;
  }

  async remove(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();

    if (!deletedPost) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }

    return deletedPost;
  }
}
