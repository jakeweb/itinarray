import { ItinarrayPage } from './app.po';

describe('itinarray App', () => {
  let page: ItinarrayPage;

  beforeEach(() => {
    page = new ItinarrayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
