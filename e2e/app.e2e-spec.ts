import { VenteicherOrgPage } from './app.po';

describe('venteicher-org App', () => {
  let page: VenteicherOrgPage;

  beforeEach(() => {
    page = new VenteicherOrgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
