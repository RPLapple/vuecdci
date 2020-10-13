import { render } from '@testing-library/vue';
import Counter from './Counter.vue';

test('Original title is 「當前點擊次數0」', () => {
  const { getByTestId } = render(Counter);

  const title = getByTestId('currentCounter');

  expect(title.innerHTML).toBe('當前點擊次數0');
});
