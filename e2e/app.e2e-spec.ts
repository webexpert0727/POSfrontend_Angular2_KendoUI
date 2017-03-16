import { YoiposPage } from './app.po';

describe('yoipos App', () => {
  let page: YoiposPage;

  beforeEach(() => {
    page = new YoiposPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
