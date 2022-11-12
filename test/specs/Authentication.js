const data = require("../helper/data.js");
const HomePage = require("../pageobjects/assignment/home.page");
const CreateAccountPage = require("../pageobjects/assignment/Authorization/createAccountPage");
const SignInPage = require("../pageobjects/assignment/Authorization/signInPage");

describe.skip("Authentication Flow", () => {
  it("Click create account button", async () => {
    await HomePage.openAssignment();
    await HomePage.createAccountButton.click();
  });

  it.skip("Sign up using for a new account", async () => {
    await CreateAccountPage.signUpForAccount(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.passwordConfirmation
    );

    await browser.debug();
  });
});

describe.skip("It should login with a username and password", async () => {
  it("Click signInButton", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    await expect(HomePage.greetingsIfLoggedin);
    await expect(HomePage.greetingsIfLoggedin).toHaveTextContaining(
      data.firstName
    );
  });

  // it("should login with with username and password", async () => {
  //   await SignInPage.signUpForAccount();
  // });
});
