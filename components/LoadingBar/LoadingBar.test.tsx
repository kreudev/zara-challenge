import { render } from '@testing-library/react';
import { LoadingBar } from './LoadingBar';

describe('LoadingBar', () => {
  it('applies the loading class when loading is true', () => {
    const { container } = render(<LoadingBar loading={true} />);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toMatch(/loading/);
  });

  it('does not apply the loading class when loading is false', () => {
    const { container } = render(<LoadingBar loading={false} />);
    const div = container.firstChild as HTMLElement;
    expect(div.className).not.toMatch(/loading/);
  });
}); 