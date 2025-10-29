import { render, screen } from '@/__tests__/utils/test-utils';
import TalkCard from '@/components/cards/TalkCard';
import { mockTalk } from '@/__tests__/utils/mocks';

describe('TalkCard Component', () => {
  it('renders talk title', () => {
    render(<TalkCard talk={mockTalk} />);
    expect(screen.getByText(mockTalk.title)).toBeInTheDocument();
  });

  it('renders talk summary', () => {
    render(<TalkCard talk={mockTalk} />);
    expect(screen.getByText(mockTalk.summary)).toBeInTheDocument();
  });

  it('renders thumbnail placeholder', () => {
    render(<TalkCard talk={mockTalk} />);
    expect(screen.getByText('Charla')).toBeInTheDocument();
  });

  it('renders "Ver charla" button with correct link', () => {
    render(<TalkCard talk={mockTalk} />);
    const link = screen.getByRole('link', { name: /ver charla/i });
    expect(link).toHaveAttribute('href', mockTalk.link);
  });

  it('applies card base styles', () => {
    const { container } = render(<TalkCard talk={mockTalk} />);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white', 'dark:bg-gray-800', 'rounded-lg');
  });

  it('has horizontal layout with flex', () => {
    const { container } = render(<TalkCard talk={mockTalk} />);
    const card = container.firstChild;
    expect(card).toHaveClass('flex');
  });

  it('renders all talk data correctly', () => {
    render(<TalkCard talk={mockTalk} />);
    
    expect(screen.getByText(mockTalk.title)).toBeInTheDocument();
    expect(screen.getByText(mockTalk.summary)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver charla/i })).toHaveAttribute('href', mockTalk.link);
  });
});
