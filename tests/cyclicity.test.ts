import { cyclicity } from '../src/cyclicity';

describe('周期性函数', () => {
  it('should call hello in 1s, 5s, 10s', () => {
    cyclicity({
      times: ['1s', '5s', '10s'],
      task: () => {
        console.info('hello');
      },
    });
  });
});
