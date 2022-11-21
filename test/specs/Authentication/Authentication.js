const data = require("../../helper/data");
const listOfData = require("../../helper/dataList.js");
const HomePage = require("../../pageobjects/assignment/home.page");
const CreateAccountPage = require("../../pageobjects/assignment/Authorization/createAccountPage");
const SignInPage = require("../../pageobjects/assignment/Authorization/signInPage");
const helpers = require("../../helper/helperFunctions.js");
const edgeData = require("../../helper/edgeData");
let browserName = browser.capabilities.browserName;
describe("Authentication Flow", () => {
  let browserName = browser.capabilities.browserName;
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
      if (browserName == "chrome") {
        console.log("I am chrome");
      } else {
        console.log("I am bot chrome but  " + browser.capabilities.browserName);
      }

      console.log(browser.sessionId); // outputs: "57b15c6ea81d0edb9e5b372da3d9ce28"
      console.log("This is browser Name" + browser.capabilities.browserName); // outputs);
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
      await expect(CreateAccountPage.accountSuccess).toBeExisting();
      await HomePage.signOutCartTest();
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

describe("It should login with a username and password and then try to create an account", async () => {
  it("Click signInButton", async () => {
    await HomePage.openAssignment();
    await HomePage.createAccountButton.click();

    if (browserName == "chrome") {
      await CreateAccountPage.signUpForAccount(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.password
      );
    } else {
      await CreateAccountPage.signUpForAccount(
        edgeData.firstName,
        data.lastName,
        edgeData.email,
        data.password,
        data.password
      );
    }
    await expect(CreateAccountPage.errror).toBeExisting();
    // await expect(SecurePage.flashAlert).toBeExisting();

    await browser.pause(3000);
  });

  // it("should login with with username and password", async () => {
  //   await SignInPage.signUpForAccount();
  // });
});
