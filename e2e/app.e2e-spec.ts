import { SupportSystemBetaPage } from './app.po';

describe('support-system-beta App', () => {
  let page: SupportSystemBetaPage;

  beforeEach(() => {
    page = new SupportSystemBetaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
