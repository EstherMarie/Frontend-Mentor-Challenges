import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Home from '../pages/index';
import AdviceGeneratorApp from '../pages/advice-generator-app';
import EasybankLandingPage from '../pages/easybank-landing-page';

import { ThemeProvider } from 'styled-components';
import { Themes } from '../styles/themes';
import { ApiData } from '../types/AdviceApiData';

expect.extend(toHaveNoViolations);

describe('should not have any accessibility violations', () => {
  test('test Home', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve<ApiData>({ slip: { id: 0, advice: 'Advice' } }),
    }),
  ) as jest.Mock;

  test('test Advice Generator App', async () => {
    const { container } = render(
      <ThemeProvider theme={Themes}>
        <AdviceGeneratorApp />
      </ThemeProvider>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('test Easybank Landing Page', async () => {
    const { container } = render(
      <ThemeProvider theme={Themes}>
        <EasybankLandingPage />
      </ThemeProvider>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
