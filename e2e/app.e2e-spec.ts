import { MovieAssignmentsPage } from './app.po';

describe('movie-assignments App', function() {
  let page: MovieAssignmentsPage;

  beforeEach(() => {
    page = new MovieAssignmentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
