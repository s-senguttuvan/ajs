import { HelloAjsPage } from './app.po';

describe('hello-ajs App', function() {
  let page: HelloAjsPage;

  beforeEach(() => {
    page = new HelloAjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
