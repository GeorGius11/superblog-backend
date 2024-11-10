import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/posts/schemas/post.schema';

@Injectable()
export class SeedsService {
  posts = [
    {
      title: 'Exploring the Cosmos: The Mysteries of Space',
      description:
        'A journey through the wonders of the universe, exploring stars, planets, and galaxies.',
      content:
        'Space is vast, mysterious, and filled with endless wonders. From the swirling galaxies to the stars that dot the night sky, the cosmos has intrigued humans for centuries...',
      imageUrl: 'http://example.com/space.jpg',
    },
    {
      title: 'The Art of Mindfulness in Daily Life',
      description:
        'How mindfulness can improve your mental health and overall well-being.',
      content:
        'Mindfulness is the practice of being present in the moment, observing your thoughts without judgment. It has been shown to reduce stress and enhance focus...',
      imageUrl: 'http://example.com/mindfulness.jpg',
    },
    {
      title: 'Top 10 Travel Destinations for 2024',
      description:
        'Explore the top travel spots around the world, from hidden gems to bustling cities.',
      content:
        'Travel enthusiasts have a world of destinations to explore in 2024. From the serene beaches of the Maldives to the vibrant streets of Tokyo...',
      imageUrl: 'http://example.com/travel.jpg',
    },
    {
      title: 'A Guide to Healthy Eating',
      description:
        'Learn about nutritious foods and how to create balanced meals.',
      content:
        'Eating healthy is not about strict limitations or depriving yourself of foods you love. It’s about feeling good, having more energy, and improving your health...',
      imageUrl: 'http://example.com/healthy-eating.jpg',
    },
    {
      title: 'The Future of Artificial Intelligence',
      description: 'How AI is transforming industries and what lies ahead.',
      content:
        'Artificial intelligence is no longer just a futuristic concept; it’s here and transforming industries worldwide. From healthcare to finance...',
      imageUrl: 'http://example.com/ai.jpg',
    },
    {
      title: 'Understanding Climate Change and Its Impact',
      description: 'A deep dive into the causes and effects of climate change.',
      content:
        'Climate change is one of the most pressing issues of our time. Rising temperatures, changing precipitation patterns, and extreme weather events...',
      imageUrl: 'http://example.com/climate.jpg',
    },
    {
      title: 'Beginner’s Guide to Investing in Stocks',
      description: 'Learn the basics of investing and growing your wealth.',
      content:
        'Investing in the stock market can be a great way to build wealth over time. However, it’s important to understand the risks and do thorough research...',
      imageUrl: 'http://example.com/investing.jpg',
    },
    {
      title: 'The Evolution of Technology Over the Last Decade',
      description: 'A look at how technology has changed in the past 10 years.',
      content:
        'The last decade has seen remarkable advancements in technology. Smartphones, social media, artificial intelligence, and blockchain...',
      imageUrl: 'http://example.com/technology.jpg',
    },
    {
      title: 'Top Recipes for a Cozy Winter',
      description:
        'Delicious recipes to keep you warm and satisfied during the winter months.',
      content:
        'Winter calls for hearty meals that warm the soul. From soups and stews to baked goods, here are some of the best recipes to enjoy this season...',
      imageUrl: 'http://example.com/recipes.jpg',
    },
    {
      title: 'The Ultimate Guide to Personal Finance',
      description: 'Tips for budgeting, saving, and investing wisely.',
      content:
        'Managing your finances is crucial for financial stability and achieving your goals. This guide will provide tips on budgeting, saving, and investing...',
      imageUrl: 'http://example.com/finance.jpg',
    },
    {
      title: 'Mastering the Art of Cooking with Herbs and Spices',
      description:
        'Unlock the full flavor potential of your meals with herbs and spices.',
      content:
        'Herbs and spices are essential in transforming simple dishes into extraordinary meals. Knowing how to combine flavors...',
      imageUrl: 'http://example.com/cooking-herbs.jpg',
    },
    {
      title: 'The Importance of Mental Health Awareness',
      description:
        'An overview of why mental health matters and ways to support it.',
      content:
        'Mental health is a critical component of overall well-being, affecting how we think, feel, and act...',
      imageUrl: 'http://example.com/mental-health.jpg',
    },
    {
      title: 'Exploring Renewable Energy Sources',
      description:
        'A guide to solar, wind, and other forms of renewable energy.',
      content:
        'As the world shifts towards sustainable practices, renewable energy sources like solar and wind have become essential...',
      imageUrl: 'http://example.com/renewable-energy.jpg',
    },
    {
      title: 'A Guide to Minimalist Living',
      description: 'How to simplify your life and reduce clutter.',
      content:
        'Minimalist living focuses on owning less and valuing experiences over things. By decluttering, you can create a more intentional life...',
      imageUrl: 'http://example.com/minimalism.jpg',
    },
    {
      title: 'Top Tips for Effective Time Management',
      description:
        'Learn how to make the most of your day with time management techniques.',
      content:
        'Time management is essential for achieving goals and maintaining productivity. Techniques like prioritization and scheduling...',
      imageUrl: 'http://example.com/time-management.jpg',
    },
    {
      title: 'Understanding Cryptocurrency and Blockchain',
      description:
        'An introduction to the world of digital currencies and decentralized technologies.',
      content:
        'Cryptocurrency, powered by blockchain technology, is changing the financial landscape. Understanding how it works can open up new opportunities...',
      imageUrl: 'http://example.com/cryptocurrency.jpg',
    },
    {
      title: 'Traveling Solo: A Complete Guide',
      description:
        'Everything you need to know for a safe and enjoyable solo trip.',
      content:
        'Solo travel can be a rewarding experience, offering freedom and self-discovery. Here are tips to make the most of your solo journey...',
      imageUrl: 'http://example.com/solo-travel.jpg',
    },
    {
      title: 'The Science of Sleep: Why It Matters',
      description:
        'Discover the benefits of quality sleep and tips for better rest.',
      content:
        'Sleep is vital for health, impacting mood, cognition, and immune function. Understanding sleep cycles can help you improve your rest...',
      imageUrl: 'http://example.com/sleep.jpg',
    },
    {
      title: 'A Beginner’s Guide to Gardening',
      description: 'Tips and tricks to get started with your first garden.',
      content:
        'Gardening can be both relaxing and rewarding. From choosing plants to maintaining soil, here’s how to grow a healthy garden...',
      imageUrl: 'http://example.com/gardening.jpg',
    },
    {
      title: 'The Benefits of Learning a New Language',
      description: 'Why multilingualism is an asset and how to start learning.',
      content:
        'Learning a new language opens doors to new cultures and improves cognitive abilities. Here are some tips to get started...',
      imageUrl: 'http://example.com/language.jpg',
    },
    {
      title: 'How to Build a Successful Career in Tech',
      description:
        'Key skills and tips for thriving in the technology industry.',
      content:
        'The tech industry is fast-paced and competitive. Building a strong foundation and staying updated with new skills are essential for success...',
      imageUrl: 'http://example.com/career-tech.jpg',
    },
    {
      title: 'Exploring the Basics of Photography',
      description:
        'Learn the fundamentals of photography to take stunning shots.',
      content:
        'Photography is an art that captures moments and tells stories. Understanding concepts like exposure, composition, and lighting...',
      imageUrl: 'http://example.com/photography.jpg',
    },
    {
      title: 'The History and Evolution of the Internet',
      description:
        'A journey through the development of the internet from its origins to today.',
      content:
        'The internet has evolved rapidly, connecting the world in unprecedented ways. From the ARPANET to today’s global network...',
      imageUrl: 'http://example.com/internet-history.jpg',
    },
    {
      title: 'The Importance of Physical Fitness',
      description: 'Why staying active is essential for long-term health.',
      content:
        'Physical fitness is key to a healthy lifestyle, offering numerous benefits such as improved mental health, longevity, and reduced risk of disease...',
      imageUrl: 'http://example.com/fitness.jpg',
    },
    {
      title: 'Exploring Virtual Reality: The Future of Immersive Experiences',
      description: 'An overview of VR technology and its applications.',
      content:
        'Virtual reality offers immersive experiences that are transforming entertainment, education, and more. Discover how VR works and where it’s headed...',
      imageUrl: 'http://example.com/vr.jpg',
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
