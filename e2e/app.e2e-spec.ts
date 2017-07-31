import { MarkdownPreviewerPage } from './app.po';

describe('markdown-previewer App', () => {
  let page: MarkdownPreviewerPage;

  beforeEach(() => {
    page = new MarkdownPreviewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
