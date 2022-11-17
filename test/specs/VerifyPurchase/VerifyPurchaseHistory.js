const data = require("../../helper/data.js");
const HomePage = require("../../pageobjects/assignment/home.page");
const CreateAccountPage = require("../../pageobjects/assignment/Authorization/createAccountPage");
const SignInPage = require("../../pageobjects/assignment/Authorization/signInPage");

///TODO Refactor sign in to Hook but not working :/
///TODO Have  a test to to record previous order number and search for it or  the test suite validate the purchase of particular items
describe("It should verify a purchase", () => {
  it("Click create account button", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);

    await browser.pause(2000);
    await HomePage.goTOMyOrders();
    await browser.debug();
    await expect(HomePage.myTable).toBeExisting();
  });
});
