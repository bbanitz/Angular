import { LineChartPage } from './app.po';

describe('line-chart App', function() {
  let page: LineChartPage;

  beforeEach(() => {
    page = new LineChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
