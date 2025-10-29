import { render, screen } from '@/__tests__/utils/test-utils';
import BlogPage from '@/app/blog/page';

// Mock the blog data
jest.mock('@/lib/blogData', () => ({
  mockBlogPosts: [
    {
      id: 1,
      title: 'Featured Blog Post',
      summary: 'This is the featured post',
      slug: 'featured-post',
      featured: true,
    },
    {
      id: 2,
      title: 'Grid Post 1',
      summary: 'Grid post summary 1',
      slug: 'grid-post-1',
      featured: false,
    },
    {
      id: 3,
      title: 'Grid Post 2',
      summary: 'Grid post summary 2',
      slug: 'grid-post-2',
      featured: false,
    },
  ],
}));

describe('BlogPage Integration', () => {
  it('renders Header and Footer', () => {
    render(<BlogPage />);
    expect(screen.getByText('DevPortfolio')).toBeInTheDocument();
    expect(screen.getByText(/© 2025 DevPortfolio/i)).toBeInTheDocument();
  });

  it('renders featured post in hero section', () => {
    render(<BlogPage />);
    expect(screen.getByText('Featured Blog Post')).toBeInTheDocument();
    expect(screen.getByText('This is the featured post')).toBeInTheDocument();
  });

  it('renders grid posts', () => {
    render(<BlogPage />);
    expect(screen.getByText('Grid Post 1')).toBeInTheDocument();
    expect(screen.getByText('Grid Post 2')).toBeInTheDocument();
  });

  it('featured post has "Leer más" link', () => {
    render(<BlogPage />);
    const links = screen.getAllByRole('link', { name: /leer más/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<BlogPage />);
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
  });
});
