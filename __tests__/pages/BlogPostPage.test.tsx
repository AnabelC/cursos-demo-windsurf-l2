import { render, screen } from '@/__tests__/utils/test-utils';
import BlogPostPage from '@/app/blog/[slug]/page';

// Mock the blog data with complete structure
const mockPost = {
  id: 1,
  title: 'Test Blog Post',
  summary: 'Test summary',
  slug: 'test-post',
  featured: false,
  author: 'Test Author',
  date: '2025-01-01',
  readTime: '5 min de lectura',
  content: {
    intro: 'Introduction paragraph',
    sections: [
      {
        title: 'Section 1',
        paragraphs: ['Paragraph 1', 'Paragraph 2']
      }
    ]
  }
};

const relatedPost1 = {
  ...mockPost,
  id: 2,
  title: 'Related Post 1',
  slug: 'related-1',
  summary: 'Related summary 1'
};

const relatedPost2 = {
  ...mockPost,
  id: 3,
  title: 'Related Post 2',
  slug: 'related-2',
  summary: 'Related summary 2'
};

// Mock debe estar fuera del scope de las variables
jest.mock('@/lib/blogData', () => ({
  mockBlogPosts: [
    {
      id: 1,
      title: 'Test Blog Post',
      summary: 'Test summary',
      slug: 'test-post',
      featured: false,
      author: 'Test Author',
      date: '2025-01-01',
      readTime: '5 min de lectura',
      content: {
        intro: 'Introduction paragraph',
        sections: [
          {
            title: 'Section 1',
            paragraphs: ['Paragraph 1', 'Paragraph 2']
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Related Post 1',
      summary: 'Related summary 1',
      slug: 'related-1',
      featured: false,
      author: 'Test Author',
      date: '2025-01-01',
      readTime: '5 min de lectura',
      content: {
        intro: 'Introduction paragraph',
        sections: [
          {
            title: 'Section 1',
            paragraphs: ['Paragraph 1', 'Paragraph 2']
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Related Post 2',
      summary: 'Related summary 2',
      slug: 'related-2',
      featured: false,
      author: 'Test Author',
      date: '2025-01-01',
      readTime: '5 min de lectura',
      content: {
        intro: 'Introduction paragraph',
        sections: [
          {
            title: 'Section 1',
            paragraphs: ['Paragraph 1', 'Paragraph 2']
          }
        ]
      }
    }
  ],
}));

describe('BlogPostPage Integration', () => {
  it('renders Header and Footer', async () => {
    const mockParams = Promise.resolve({ slug: 'test-post' });
    const Component = await BlogPostPage({ params: mockParams });
    render(Component);
    
    expect(screen.getByText('DevPortfolio')).toBeInTheDocument();
    expect(screen.getByText(/© 2025 DevPortfolio/i)).toBeInTheDocument();
  });

  it('renders post title and metadata', async () => {
    const mockParams = Promise.resolve({ slug: 'test-post' });
    const Component = await BlogPostPage({ params: mockParams });
    render(Component);
    
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/5 min de lectura/i)).toBeInTheDocument();
  });

  it('renders post content', async () => {
    const mockParams = Promise.resolve({ slug: 'test-post' });
    const Component = await BlogPostPage({ params: mockParams });
    render(Component);
    
    expect(screen.getByText('Introduction paragraph')).toBeInTheDocument();
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
  });

  it('renders related posts section', async () => {
    const mockParams = Promise.resolve({ slug: 'test-post' });
    const Component = await BlogPostPage({ params: mockParams });
    render(Component);
    
    expect(screen.getByText(/posts relacionados/i)).toBeInTheDocument();
    expect(screen.getByText('Related Post 1')).toBeInTheDocument();
    expect(screen.getByText('Related Post 2')).toBeInTheDocument();
  });

  it('shows error message when post not found', async () => {
    const notFoundParams = Promise.resolve({ slug: 'non-existent' });
    const Component = await BlogPostPage({ params: notFoundParams });
    render(Component);
    
    expect(screen.getByText(/post no encontrado/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /volver al blog/i })).toBeInTheDocument();
  });

  it('error page has link back to blog', async () => {
    const notFoundParams = Promise.resolve({ slug: 'non-existent' });
    const Component = await BlogPostPage({ params: notFoundParams });
    render(Component);
    
    const link = screen.getByRole('link', { name: /volver al blog/i });
    expect(link).toHaveAttribute('href', '/blog');
  });
});
