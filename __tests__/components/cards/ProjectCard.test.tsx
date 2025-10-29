import { render, screen } from '@/__tests__/utils/test-utils';
import ProjectCard from '@/components/cards/ProjectCard';
import { mockProject } from '@/__tests__/utils/mocks';

describe('ProjectCard Component', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  it('renders project image placeholder with ID', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(`Proyecto ${mockProject.id}`)).toBeInTheDocument();
  });

  it('applies card base styles', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white', 'dark:bg-gray-800', 'rounded-lg');
  });

  it('renders with correct aspect ratio for image', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const imageContainer = container.querySelector('.aspect-\\[4\\/3\\]');
    expect(imageContainer).toBeInTheDocument();
  });

  it('renders all project data correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(`Proyecto ${mockProject.id}`)).toBeInTheDocument();
  });
});
