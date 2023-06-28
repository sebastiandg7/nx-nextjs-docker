import { render } from '@testing-library/react';

import MyAppFeatureMain from './my-app-feature-main';

describe('MyAppFeatureMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAppFeatureMain />);
    expect(baseElement).toBeTruthy();
  });
});
