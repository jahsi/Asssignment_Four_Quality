const Page = require("../../page");

class SignInPage extends Page {
  get emailInput() {
    return $('input[id="email"]');
  }

  get passwordInput() {
    return $('input[id="pass"]');
  }
  get signInInput() {
    return $('button[id="send2"][class="action login primary"]');
  }
  get firstForgetPasswordInput() {
    return $("//div/a[@class='action']/span[contains(text(),'For')]");
  }

  async signInWithCredentials(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.signInInput.click();
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}

module.exports = new SignInPage();
