const Page = require("../page");

class HomePage extends Page {
  get signInButton() {
    return $('a[title="Log in to your customer account"]');
  }

  get createAccountButton() {
    return $("(//li/a[contains(text(),'Create')])[1]");
  }
  open() {
    return super.openAssignment();
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }
}

module.exports = new HomePage();
