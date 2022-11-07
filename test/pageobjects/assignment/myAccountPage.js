const Page = require("../page");

class AccountPage {
  get createAccountButton() {
    return $('button[id="SubmitCreate"]');
  }

  get emailAddressInput() {
    return $('input[id="email_create"]');
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }
  async enterCredentialsAndCreateAccount(email) {
    await this.emailAddressInput.setValue(email);
    await this.createAccountButton.click();
  }
}

module.exports = new AccountPage();
