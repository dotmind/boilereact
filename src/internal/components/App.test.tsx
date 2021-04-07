import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from 'internal/store';
import App from 'internal/components/App';

test('Component App and text renders as expected', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Let's get started in here 🚀 !/i)).toBeInTheDocument();
});
