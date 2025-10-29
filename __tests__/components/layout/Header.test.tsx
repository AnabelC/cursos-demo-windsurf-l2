import { render, screen } from '@/__tests__/utils/test-utils';
import Header from '@/components/layout/Header';

describe('Header Component', () => {
  it('renders the logo with correct text', () => {
    render(<Header />);
    const logo = screen.getByText('DevPortfolio');
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  });

  it('navigation links have correct href attributes', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('logo links to homepage', () => {
    render(<Header />);
    const logo = screen.getByText('DevPortfolio');
    expect(logo).toHaveAttribute('href', '/');
  });

  it('applies correct CSS classes for styling', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('border-b');
  });
});
