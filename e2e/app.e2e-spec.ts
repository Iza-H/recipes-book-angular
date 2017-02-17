import { RecipeBookAngularPage } from './app.po';

describe('recipe-book-angular App', function() {
  let page: RecipeBookAngularPage;

  beforeEach(() => {
    page = new RecipeBookAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iz works!');
  });
});
