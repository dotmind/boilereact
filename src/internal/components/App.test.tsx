import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'internal/store';
import App from 'internal/components/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Let's get started in here 🚀 !/i)).toBeInTheDocument();
});
