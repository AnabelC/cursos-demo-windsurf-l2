import { render, screen } from '@/__tests__/utils/test-utils';
import BlogCard from '@/components/cards/BlogCard';
import { mockBlogPost, mockFeaturedPost } from '@/__tests__/utils/mocks';

describe('BlogCard Component', () => {
  describe('Featured Variant', () => {
    it('renders featured badge', () => {
      render(<BlogCard post={mockFeaturedPost} variant="featured" />);
      expect(screen.getByText(/destacado/i)).toBeInTheDocument();
    });

    it('renders post title and summary', () => {
      render(<BlogCard post={mockFeaturedPost} variant="featured" />);
      expect(screen.getByText(mockFeaturedPost.title)).toBeInTheDocument();
      expect(screen.getByText(mockFeaturedPost.summary)).toBeInTheDocument();
    });

    it('renders "Leer más" button with correct link', () => {
      render(<BlogCard post={mockFeaturedPost} variant="featured" />);
      const link = screen.getByRole('link', { name: /leer más/i });
      expect(link).toHaveAttribute('href', `/blog/${mockFeaturedPost.slug}`);
    });

    it('does not render image in featured variant', () => {
      render(<BlogCard post={mockFeaturedPost} variant="featured" />);
      expect(screen.queryByText(/miniatura/i)).not.toBeInTheDocument();
    });
  });

  describe('Grid Variant (default)', () => {
    it('renders post image placeholder', () => {
      render(<BlogCard post={mockBlogPost} variant="grid" />);
      expect(screen.getByText(/miniatura/i)).toBeInTheDocument();
    });

    it('renders post title and summary', () => {
      render(<BlogCard post={mockBlogPost} variant="grid" />);
      expect(screen.getByText(mockBlogPost.title)).toBeInTheDocument();
      expect(screen.getByText(mockBlogPost.summary)).toBeInTheDocument();
    });

    it('renders "Leer más" button with correct link', () => {
      render(<BlogCard post={mockBlogPost} variant="grid" />);
      const link = screen.getByRole('link', { name: /leer más/i });
      expect(link).toHaveAttribute('href', `/blog/${mockBlogPost.slug}`);
    });

    it('uses default variant when no variant is specified', () => {
      render(<BlogCard post={mockBlogPost} />);
      expect(screen.getByText(/miniatura/i)).toBeInTheDocument();
    });
  });

  describe('Compact Variant', () => {
    it('renders small thumbnail', () => {
      render(<BlogCard post={mockBlogPost} variant="compact" />);
      expect(screen.getByText(/img/i)).toBeInTheDocument();
    });

    it('renders post title and summary', () => {
      render(<BlogCard post={mockBlogPost} variant="compact" />);
      expect(screen.getByText(mockBlogPost.title)).toBeInTheDocument();
      expect(screen.getByText(mockBlogPost.summary)).toBeInTheDocument();
    });

    it('renders "Leer" link instead of button', () => {
      render(<BlogCard post={mockBlogPost} variant="compact" />);
      const link = screen.getByRole('link', { name: /leer/i });
      expect(link).toHaveAttribute('href', `/blog/${mockBlogPost.slug}`);
    });

    it('has horizontal layout with flex', () => {
      const { container } = render(<BlogCard post={mockBlogPost} variant="compact" />);
      const card = container.firstChild;
      expect(card).toHaveClass('flex');
    });
  });

  describe('Common Behavior', () => {
    it('renders correctly with all required post data', () => {
      render(<BlogCard post={mockBlogPost} variant="grid" />);
      expect(screen.getByText(mockBlogPost.title)).toBeInTheDocument();
      expect(screen.getByText(mockBlogPost.summary)).toBeInTheDocument();
    });

    it('applies card base styles', () => {
      const { container } = render(<BlogCard post={mockBlogPost} variant="grid" />);
      const card = container.firstChild;
      expect(card).toHaveClass('bg-white', 'dark:bg-gray-800', 'rounded-lg');
    });
  });
});
