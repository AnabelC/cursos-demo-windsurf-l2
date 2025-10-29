import type { BlogPost } from '@/lib/blogData';
import type { Project } from '@/lib/data/projectsData';
import type { Talk } from '@/lib/data/talksData';

// Mock blog posts for testing
export const mockBlogPost: BlogPost = {
  id: 1,
  title: 'Test Blog Post',
  summary: 'This is a test summary for the blog post',
  slug: 'test-blog-post',
  featured: false,
  author: 'Test Author',
  date: '2025-01-01',
  readTime: '5 min de lectura',
  content: {
    intro: 'This is the introduction paragraph.',
    sections: [
      {
        title: 'Section 1',
        paragraphs: ['Paragraph 1 content', 'Paragraph 2 content']
      }
    ]
  }
};

export const mockFeaturedPost: BlogPost = {
  id: 2,
  title: 'Featured Blog Post',
  summary: 'This is a featured post summary',
  slug: 'featured-blog-post',
  featured: true,
  author: 'Featured Author',
  date: '2025-01-02',
  readTime: '7 min de lectura',
  content: {
    intro: 'Featured post introduction.',
    sections: [
      {
        title: 'Featured Section',
        paragraphs: ['Featured paragraph']
      }
    ]
  }
};

export const mockBlogPosts: BlogPost[] = [
  mockFeaturedPost,
  mockBlogPost,
  {
    id: 3,
    title: 'Another Test Post',
    summary: 'Another test summary',
    slug: 'another-test-post',
    featured: false,
    author: 'Another Author',
    date: '2025-01-03',
    readTime: '6 min de lectura',
    content: {
      intro: 'Another introduction.',
      sections: [
        {
          title: 'Another Section',
          paragraphs: ['Another paragraph']
        }
      ]
    }
  }
];

// Mock project for testing
export const mockProject: Project = {
  id: 1,
  title: 'Test Project',
  description: 'This is a test project description',
  image: '/test-image.jpg'
};

export const mockProjects: Project[] = [
  mockProject,
  { ...mockProject, id: 2, title: 'Project 2' },
  { ...mockProject, id: 3, title: 'Project 3' },
  { ...mockProject, id: 4, title: 'Project 4' },
];

// Mock talk for testing
export const mockTalk: Talk = {
  id: 1,
  title: 'Test Talk',
  summary: 'This is a test talk summary',
  thumbnail: '/test-thumbnail.jpg',
  link: '#test-link'
};

export const mockTalks: Talk[] = [
  mockTalk,
  { ...mockTalk, id: 2, title: 'Talk 2' },
];
