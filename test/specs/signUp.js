const HomePage = require("../pageobjects/assignment/home.page");
const AccountPage = require("../pageobjects/assignment/myAccountPage");

describe("Sign Up to webpage", () => {
  it("should check for sign in button", async () => {
    await HomePage.openAssignment();
    await expect(HomePage.signInButton).toHaveText("Sign in");
    await HomePage.clickSignInButton();
  });

  it("should enter a email address", async () => {
    await HomePage.clickSignInButton();
    await AccountPage.enterCredentialsAndCreateAccount(
      "examplelololololol@example.com"
    );
    await browser.debug();
  });
});
