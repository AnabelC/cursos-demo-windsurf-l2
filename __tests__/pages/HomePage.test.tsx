import { render, screen } from '@/__tests__/utils/test-utils';
import HomePage from '@/app/page';

// Mock the blog data
jest.mock('@/lib/blogData', () => ({
  mockBlogPosts: [
    {
      id: 1,
      title: 'Featured Post',
      summary: 'Featured summary',
      slug: 'featured-post',
      featured: true,
    },
    {
      id: 2,
      title: 'Recent Post 1',
      summary: 'Recent summary 1',
      slug: 'recent-1',
      featured: false,
    },
    {
      id: 3,
      title: 'Recent Post 2',
      summary: 'Recent summary 2',
      slug: 'recent-2',
      featured: false,
    },
  ],
}));

describe('HomePage Integration', () => {
  it('renders Header component', () => {
    render(<HomePage />);
    expect(screen.getByText('DevPortfolio')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<HomePage />);
    expect(screen.getByText(/© 2025 DevPortfolio/i)).toBeInTheDocument();
  });

  it('renders About Me section', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('renders Blog section heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
  });

  it('renders featured blog post', () => {
    render(<HomePage />);
    expect(screen.getByText('Featured Post')).toBeInTheDocument();
    expect(screen.getByText('Featured summary')).toBeInTheDocument();
  });

  it('renders recent blog posts', () => {
    render(<HomePage />);
    expect(screen.getByText('Recent Post 1')).toBeInTheDocument();
    expect(screen.getByText('Recent Post 2')).toBeInTheDocument();
  });

  it('has "Ver más" link to About page', () => {
    render(<HomePage />);
    const link = screen.getByRole('link', { name: /ver más/i });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
  });
});
