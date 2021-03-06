import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
describe('ng5-create-route App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page', () => {
    //navigate to default route
    page.navigateTo();
    //browser.pause();
    expect(page.getHomePageText()).toEqual('Home Page');
  });

  it('should display About Button', () => {
    //navigate to default route
    page.navigateTo();
    //browser.pause();
    expect(page.getAboutButton()).toEqual('About');
  });

  it('should go to About page and show correctly', () => {
    //navigate to default route
    page.navigateTo();
    page.getAboutButton().click();
    //browser.pause();
    expect(page.getAboutText()).toEqual('About Page');
  });
});
