const Page = require("../page");

class HomePage extends Page {
  get signInButton() {
    return $('a[title="Log in to your customer account"]');
  }

  open() {
    return super.openAssignment();
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}

module.exports = new HomePage();
