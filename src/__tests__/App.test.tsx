import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Home from '../pages/index';
import AdviceGeneratorApp from '../pages/advice-generator-app';
import EasybankLandingPage from '../pages/easybank-landing-page';

import { ThemeProvider } from 'styled-components';
import { Themes } from '../styles/themes';

expect.extend(toHaveNoViolations);

describe('should not have any accessibility violations', () => {
  test('tests Home', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // FIXME: ReferenceError: fetch is not defined
  // Solution: node-fetch?? axios?

  // test('test Advice Generator App', async () => {
  //   const { container } = render(
  //     <ThemeProvider theme={Themes.AdviceGeneratorAppTheme}>
  //       <AdviceGeneratorApp />
  //     </ThemeProvider>
  //   );
  //   const results = await axe(container);
  //   expect(results).toHaveNoViolations();
  // });

  test('test Easybank Landing Page', async () => {
    const { container } = render(
      <ThemeProvider theme={Themes.EasybankLandingPageTheme}>
        <EasybankLandingPage />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
