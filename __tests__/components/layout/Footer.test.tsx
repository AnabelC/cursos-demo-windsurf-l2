import { render, screen } from '@/__tests__/utils/test-utils';
import Footer from '@/components/layout/Footer';

describe('Footer Component', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 DevPortfolio/i)).toBeInTheDocument();
  });

  it('renders all social media links', () => {
    render(<Footer />);
    
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('social links have correct href attributes', () => {
    render(<Footer />);
    
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const tiktokLink = screen.getByRole('link', { name: /tiktok/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
    expect(tiktokLink).toHaveAttribute('href', 'https://tiktok.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
  });

  it('external links open in new tab with security attributes', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies correct CSS classes', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('border-t');
  });
});
