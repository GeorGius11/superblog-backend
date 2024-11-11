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
      content: `
            <h2>Introduction to the Cosmos</h2>
            <p>The vastness of space has fascinated humanity for millennia. From ancient astronomers observing the stars to modern telescopes peering into the depths of galaxies, the mysteries of space continue to captivate us.</p>
            <h3>The Stars and Beyond</h3>
            <p>Stars are the building blocks of galaxies, illuminating the universe. Each star has its own life cycle, and many are surrounded by planets, giving rise to endless possibilities for exploration.</p>
            <h3>Galaxies and Nebulae</h3>
            <p>Our Milky Way is just one of billions of galaxies in the observable universe. Some galaxies are spiral, like our own, while others take on elliptical or irregular shapes.</p>
            <blockquote>“The cosmos is within us. We are made of star-stuff.” - Carl Sagan</blockquote>
            <p>Exploring the cosmos teaches us about the origins of matter, energy, and life itself.</p>
          `,
      imageUrl: 'images/sample-1.jpg',
    },
    {
      title: 'The Art of Mindfulness in Daily Life',
      description:
        'How mindfulness can improve your mental health and overall well-being.',
      content: `
            <h2>The Power of Being Present</h2>
            <p>Mindfulness involves fully engaging with the present moment, observing thoughts and sensations without judgment. Practicing mindfulness can help manage stress and improve focus.</p>
            <h3>Techniques for Everyday Mindfulness</h3>
            <p>Simple exercises, such as mindful breathing and body scanning, allow us to connect with our surroundings and cultivate a sense of peace.</p>
            <ul>
              <li>Practice deep breathing to center yourself.</li>
              <li>Take a mindful walk, focusing on each step and breath.</li>
            </ul>
            <p>Incorporating these practices into daily routines can transform how we approach life’s challenges.</p>
          `,
      imageUrl: 'images/sample-2.jpg',
    },
    {
      title: 'Top 10 Travel Destinations for 2024',
      description:
        'Explore the top travel spots around the world, from hidden gems to bustling cities.',
      content: `
            <h2>Travel Dreams for 2024</h2>
            <p>For those with a passion for exploration, 2024 offers a world of exciting destinations. From serene beaches to vibrant cityscapes, there is something for every traveler.</p>
            <h3>Exotic Beaches</h3>
            <p>The Maldives, known for its crystal-clear waters and white-sand beaches, remains a top choice for relaxation and beauty.</p>
            <h3>Cultural Hotspots</h3>
            <p>Cities like Tokyo offer a rich blend of traditional culture and modern innovation, providing endless activities for visitors.</p>
          `,
      imageUrl: 'images/sample-3.jpg',
    },
    {
      title: 'A Guide to Healthy Eating',
      description:
        'Learn about nutritious foods and how to create balanced meals.',
      content: `
            <h2>Creating a Balanced Diet</h2>
            <p>Eating healthy is about making sustainable choices, nourishing your body with the right mix of nutrients.</p>
            <h3>Essential Nutrients</h3>
            <p>A balanced diet includes carbohydrates, proteins, and fats, along with vitamins and minerals.</p>
            <ul>
              <li>Whole grains for fiber and energy.</li>
              <li>Protein for muscle and tissue repair.</li>
              <li>Healthy fats for brain function and satiety.</li>
            </ul>
          `,
      imageUrl: 'images/sample-4.jpg',
    },
    {
      title: 'The Future of Artificial Intelligence',
      description: 'How AI is transforming industries and what lies ahead.',
      content: `
            <h2>AI: Transforming the World</h2>
            <p>Artificial intelligence is revolutionizing how we work, communicate, and live. From personalized recommendations to complex problem-solving, AI has far-reaching impacts.</p>
            <h3>Applications of AI</h3>
            <p>AI is used in healthcare, finance, retail, and beyond, enhancing efficiency and innovation across sectors.</p>
            <h3>The Future</h3>
            <p>With advancements in machine learning, we can expect AI to play an even greater role in our daily lives.</p>
          `,
      imageUrl: 'images/sample-5.jpg',
    },
    {
      title: 'Understanding Climate Change and Its Impact',
      description: 'A deep dive into the causes and effects of climate change.',
      content: `
            <h2>The Reality of Climate Change</h2>
            <p>Climate change is an urgent issue affecting ecosystems, weather patterns, and communities worldwide.</p>
            <h3>Human Impact</h3>
            <p>Industrial activities, deforestation, and pollution contribute significantly to greenhouse gas emissions, accelerating global warming.</p>
            <h3>Effects on the Planet</h3>
            <p>Extreme weather events, sea-level rise, and biodiversity loss are some of the consequences of a warming planet.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Beginner’s Guide to Investing in Stocks',
      description: 'Learn the basics of investing and growing your wealth.',
      content: `
            <h2>Getting Started with Stocks</h2>
            <p>Investing in stocks is one of the most popular ways to grow wealth. It involves buying shares in a company, making you a part-owner.</p>
            <h3>Understanding the Market</h3>
            <p>The stock market fluctuates based on economic indicators, company performance, and investor sentiment.</p>
            <p>Research and patience are essential for successful investing.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Evolution of Technology Over the Last Decade',
      description: 'A look at how technology has changed in the past 10 years.',
      content: `
            <h2>A Decade of Change</h2>
            <p>The past ten years have seen a surge in technological innovation, with advancements reshaping how we live and work.</p>
            <h3>Key Innovations</h3>
            <ul>
              <li>Smartphones connecting us like never before.</li>
              <li>AI and machine learning transforming industries.</li>
              <li>Social media altering communication.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Top Recipes for a Cozy Winter',
      description:
        'Delicious recipes to keep you warm and satisfied during the winter months.',
      content: `
            <h2>Winter Comfort Foods</h2>
            <p>As the temperature drops, there’s nothing better than a warm meal to cozy up with. These winter recipes are sure to keep you warm.</p>
            <h3>Classic Soups</h3>
            <p>Nothing says winter like a hot bowl of soup. Try hearty vegetable or chicken noodle for comfort.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Ultimate Guide to Personal Finance',
      description: 'Tips for budgeting, saving, and investing wisely.',
      content: `
            <h2>Personal Finance Fundamentals</h2>
            <p>Managing your finances is crucial for financial stability and achieving long-term goals. By budgeting, saving, and investing smartly, you can create a strong financial foundation.</p>
            <h3>Budgeting Basics</h3>
            <p>Creating a budget helps you track your spending and find areas where you can save. Allocate funds to essentials, savings, and discretionary spending.</p>
            <h3>Investing for the Future</h3>
            <p>Investing allows your money to grow over time. Understanding different asset classes, such as stocks and bonds, can help you make informed investment choices.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Mastering the Art of Cooking with Herbs and Spices',
      description:
        'Unlock the full flavor potential of your meals with herbs and spices.',
      content: `
            <h2>Cooking with Flavor</h2>
            <p>Herbs and spices can transform simple ingredients into a flavorful dish. Knowing how to use them elevates your cooking to a new level.</p>
            <h3>Essential Herbs</h3>
            <ul>
              <li>Basil for Italian dishes.</li>
              <li>Thyme for savory meats and vegetables.</li>
              <li>Cilantro for fresh, vibrant flavors.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Importance of Mental Health Awareness',
      description:
        'An overview of why mental health matters and ways to support it.',
      content: `
            <h2>Mental Health Matters</h2>
            <p>Mental health is an essential part of well-being, influencing how we think, feel, and act.</p>
            <h3>Supporting Mental Health</h3>
            <p>Practices like therapy, meditation, and self-care can improve mental health.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Exploring Renewable Energy Sources',
      description:
        'A guide to solar, wind, and other forms of renewable energy.',
      content: `
            <h2>Renewable Energy for a Sustainable Future</h2>
            <p>As we seek to reduce our environmental impact, renewable energy sources offer a promising solution.</p>
            <h3>Types of Renewable Energy</h3>
            <ul>
              <li>Solar energy harnessed from sunlight.</li>
              <li>Wind energy captured from wind turbines.</li>
              <li>Hydropower from flowing water.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'A Guide to Minimalist Living',
      description: 'How to simplify your life and reduce clutter.',
      content: `
            <h2>Living with Less</h2>
            <p>Minimalism is about focusing on what truly matters by reducing clutter and unnecessary possessions.</p>
            <h3>Steps to Start</h3>
            <p>Begin by decluttering one area at a time and prioritizing experiences over material things.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Top Tips for Effective Time Management',
      description:
        'Learn how to make the most of your day with time management techniques.',
      content: `
            <h2>Maximizing Your Time</h2>
            <p>Time management is crucial for productivity and work-life balance.</p>
            <h3>Strategies</h3>
            <ul>
              <li>Prioritize tasks by importance.</li>
              <li>Use tools like calendars and to-do lists.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Understanding Cryptocurrency and Blockchain',
      description:
        'An introduction to the world of digital currencies and decentralized technologies.',
      content: `
            <h2>The Rise of Cryptocurrency</h2>
            <p>Cryptocurrencies like Bitcoin and Ethereum have gained popularity as digital assets that operate independently of traditional banks.</p>
            <h3>Blockchain Technology</h3>
            <p>Blockchain is the foundation of cryptocurrency, providing a decentralized ledger for secure transactions.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Traveling Solo: A Complete Guide',
      description:
        'Everything you need to know for a safe and enjoyable solo trip.',
      content: `
            <h2>Solo Adventures</h2>
            <p>Solo travel can be rewarding, offering freedom and self-discovery.</p>
            <h3>Safety Tips</h3>
            <ul>
              <li>Research your destination.</li>
              <li>Stay connected with loved ones.</li>
              <li>Trust your instincts.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Science of Sleep: Why It Matters',
      description:
        'Discover the benefits of quality sleep and tips for better rest.',
      content: `
            <h2>The Importance of Sleep</h2>
            <p>Sleep affects mood, cognition, and immune function, making it essential for well-being.</p>
            <h3>Improving Your Sleep</h3>
            <ul>
              <li>Establish a regular sleep schedule.</li>
              <li>Create a relaxing bedtime routine.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'A Beginner’s Guide to Gardening',
      description: 'Tips and tricks to get started with your first garden.',
      content: `
            <h2>Starting Your Garden</h2>
            <p>Gardening can be a fulfilling activity, allowing you to grow fresh produce and beautiful plants.</p>
            <h3>Gardening Basics</h3>
            <p>Start with easy plants, learn about soil types, and water consistently for best results.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Benefits of Learning a New Language',
      description: 'Why multilingualism is an asset and how to start learning.',
      content: `
            <h2>Language Learning Advantages</h2>
            <p>Learning a new language broadens horizons, enhances cognitive abilities, and opens cultural doors.</p>
            <h3>Getting Started</h3>
            <p>Use apps, take classes, and practice regularly for success.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'How to Build a Successful Career in Tech',
      description:
        'Key skills and tips for thriving in the technology industry.',
      content: `
            <h2>Thriving in Tech</h2>
            <p>The tech industry offers exciting career opportunities for those who stay adaptable and continuously learn.</p>
            <h3>Skills to Develop</h3>
            <ul>
              <li>Coding and problem-solving abilities.</li>
              <li>Communication and teamwork.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Exploring the Basics of Photography',
      description:
        'Learn the fundamentals of photography to take stunning shots.',
      content: `
            <h2>Photography Fundamentals</h2>
            <p>Photography is about capturing moments and telling stories through images.</p>
            <h3>Key Concepts</h3>
            <p>Mastering exposure, composition, and lighting will improve your photos.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The History and Evolution of the Internet',
      description:
        'A journey through the development of the internet from its origins to today.',
      content: `
            <h2>The Internet's Journey</h2>
            <p>The internet has connected the world, evolving from a basic network to today’s global infrastructure.</p>
            <h3>Key Milestones</h3>
            <p>From ARPANET to the World Wide Web, each advancement shaped the digital landscape.</p>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'The Importance of Physical Fitness',
      description: 'Why staying active is essential for long-term health.',
      content: `
            <h2>Physical Activity Benefits</h2>
            <p>Fitness improves mental health, longevity, and reduces disease risk.</p>
            <h3>Activities to Try</h3>
            <ul>
              <li>Cardio for heart health.</li>
              <li>Strength training for muscle maintenance.</li>
            </ul>
          `,
      imageUrl: 'images/sample.jpg',
    },
    {
      title: 'Exploring Virtual Reality: The Future of Immersive Experiences',
      description: 'An overview of VR technology and its applications.',
      content: `
            <h2>Virtual Reality: Redefining Interaction</h2>
            <p>Virtual reality (VR) has rapidly evolved, offering immersive experiences that are transforming entertainment, education, and more. VR enables users to enter a simulated environment and interact with it in real-time.</p>
            <h3>Applications of VR</h3>
            <p>VR is used in a variety of fields, from gaming to healthcare. In medical training, for example, VR allows students to practice procedures in a safe, controlled environment.</p>
            <h3>The Future of VR</h3>
            <p>As technology advances, VR experiences will become even more realistic, enabling new ways to learn, explore, and connect with others.</p>
          `,
      imageUrl: 'images/sample.jpg',
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
