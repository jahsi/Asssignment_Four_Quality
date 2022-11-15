const data = require("../../helper/data");
const listOfData = require("../../helper/dataList.js");
const HomePage = require("../../pageobjects/assignment/home.page");
const CreateAccountPage = require("../../pageobjects/assignment/Authorization/createAccountPage");
const SignInPage = require("../../pageobjects/assignment/Authorization/signInPage");
const helpers = require("../../helper/helperFunctions.js");

describe("Authentication Flow", () => {
  afterEach(async function (done) {
    // drop DB collections
  });
  it.skip("Click create account button", async () => {
    for (const credentials of listOfData.emails) {
      // let randomEmail =
      //   credentials.email.slice(0, index) +
      //   "+" +
      //   Math.ceil(Math.random() * 100) +
      //   credentials.email.slice(index);
      let randomEmail = helpers.returnEmail(credentials.email);
      await HomePage.openAssignment();
      await HomePage.createAccountButton.click();

      console.log(randomEmail);
    }
  });
  // test\specs\Authentication\Authentication.js
  it("Sign up using for a new account", async () => {
    for (const userData of listOfData.emails) {
      await HomePage.openAssignment();
      await HomePage.createAccountButton.click();
      await CreateAccountPage.signUpForAccount(
        userData.firstName,
        userData.lastName,
        helpers.returnEmail(userData.email),
        data.password,
        data.password
      );

      await browser.pause(3000);
      // await expect(CreateAccountPage.accountSuccess).toBeExisting();
      await HomePage.signOut();
    }
    // await HomePage.openAssignment();
    // await HomePage.createAccountButton.click();
    // await CreateAccountPage.signUpForAccount(
    //   // data.firstName,
    //   // data.lastName,
    //   // data.email,
    //   // data.password,
    //   // data.passwordConfirmation
    //   listOfData.emails[1].firstName,
    //   listOfData.emails[1].lastName,
    //   listOfData.emails[1].email,
    //   listOfData.emails[1].password + "@1",
    //   listOfData.emails[1].password + "@1"
    // );
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
