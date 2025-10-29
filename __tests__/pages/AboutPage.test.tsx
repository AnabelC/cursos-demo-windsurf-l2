import { render, screen } from '@/__tests__/utils/test-utils';
import AboutPage from '@/app/about/page';

// Mock the data
jest.mock('@/lib/data/projectsData', () => ({
  mockProjects: [
    { id: 1, title: 'Project 1', description: 'Desc 1', image: '/img1.jpg' },
    { id: 2, title: 'Project 2', description: 'Desc 2', image: '/img2.jpg' },
    { id: 3, title: 'Project 3', description: 'Desc 3', image: '/img3.jpg' },
    { id: 4, title: 'Project 4', description: 'Desc 4', image: '/img4.jpg' },
  ],
}));

jest.mock('@/lib/data/talksData', () => ({
  mockTalks: [
    { id: 1, title: 'Talk 1', summary: 'Summary 1', thumbnail: '/t1.jpg', link: '#1' },
    { id: 2, title: 'Talk 2', summary: 'Summary 2', thumbnail: '/t2.jpg', link: '#2' },
  ],
}));

describe('AboutPage Integration', () => {
  it('renders Header and Footer', () => {
    render(<AboutPage />);
    expect(screen.getByText('DevPortfolio')).toBeInTheDocument();
    expect(screen.getByText(/© 2025 DevPortfolio/i)).toBeInTheDocument();
  });

  it('renders About Me section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('renders Projects section with heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders all 4 projects', () => {
    render(<AboutPage />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Project 3')).toBeInTheDocument();
    expect(screen.getByText('Project 4')).toBeInTheDocument();
  });

  it('renders Talks section with heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /talks/i })).toBeInTheDocument();
  });

  it('renders all talks', () => {
    render(<AboutPage />);
    expect(screen.getByText('Talk 1')).toBeInTheDocument();
    expect(screen.getByText('Talk 2')).toBeInTheDocument();
  });

  it('has "Contactar" button', () => {
    render(<AboutPage />);
    expect(screen.getByRole('link', { name: /contactar/i })).toBeInTheDocument();
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<AboutPage />);
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
  });
});
