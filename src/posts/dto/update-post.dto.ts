import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiPropertyOptional({
    description: 'Title of the post',
    example: 'Updated NestJS Guide',
  })
  title?: string;

  @ApiPropertyOptional({
    description: 'Brief description of the post',
    example: 'An updated comprehensive guide to NestJS framework.',
  })
  description?: string;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'Updated content goes here...',
  })
  content?: string;

  @ApiPropertyOptional({
    description: 'URL of the post image',
    example: 'https://example.com/updated-image.png',
  })
  imageUrl?: string;
}
