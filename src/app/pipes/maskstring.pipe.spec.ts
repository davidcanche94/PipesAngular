import { MaskstringPipe } from './maskstring.pipe';

describe('MaskstringPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskstringPipe();
    expect(pipe).toBeTruthy();
  });
});
