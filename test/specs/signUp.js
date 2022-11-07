const HomePage = require("../pageobjects/assignment/home.page");
const AccountPage = require("../pageobjects/assignment/myAccountPage");
const CreateAccountPage = require("../pageobjects/assignment/createAccountPage");

describe("Go to website and  create account", () => {
  it("Click create account button", async () => {
    await HomePage.openAssignment();
    await HomePage.createAccountButton.click();
  });

  it("Enter Sign Up details", async () => {
    await CreateAccountPage.signUpForAccount(
      "John",
      "Brown",
      "examplelol123@example.com",
      "P@ssw0rd-",
      "ssw0rd"
    );

    await browser.debug();
  });
});
