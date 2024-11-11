import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'Introducing NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    description: 'Brief description of the post',
    example: 'A comprehensive guide to NestJS framework.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'NestJS is a progressive Node.js framework...',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'URL of the post image',
    example: 'https://example.com/image.png',
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
