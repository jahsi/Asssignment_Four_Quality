// const { default: $ } = require("webdriverio/build/commands/browser/$");
const Page = require("../page");

class CreateAccountPage extends Page {
  get firstNameInput() {
    return $("input[id='firstname']");
  }
  get lastNameInput() {
    return $("input[id='lastname']");
  }

  get emailAddressInput() {
    return $("input[id='email_address']");
  }
  get passwordInput() {
    return $("input[id='password']");
  }
  get passwordConfirmationInput() {
    return $("input[id='password-confirmation'");
  }

  get createAccountButton() {
    return $('button[type="submit"][title="Create an Account"]');
  }

  async signUpForAccount(
    firstName,
    lastName,
    emailAddress,
    password,
    passwordConfirmation
  ) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.emailAddressInput.setValue(emailAddress);
    await this.passwordConfirmationInput.setValue(password);
    await this.passwordInput.setValue(password);
    await this.createAccountButton.click();
  }
}

module.exports = new CreateAccountPage();
