const Page = require("../page");

class HomePage extends Page {
  get signInButton() {
    return $("(//li/a[contains(text(),'Sign')])[1]");
  }
  get greetingsIfLoggedin() {
    return $("(//span[@class='logged-in'])[1]");
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
