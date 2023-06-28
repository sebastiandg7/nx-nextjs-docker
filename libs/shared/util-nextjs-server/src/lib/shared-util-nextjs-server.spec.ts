import { sharedUtilNextjsServer } from './shared-util-nextjs-server';

describe('sharedUtilNextjsServer', () => {
  it('should work', () => {
    expect(sharedUtilNextjsServer()).toEqual('shared-util-nextjs-server');
  });
});
