const data = require("../helper/data.js");
const HomePage = require("../pageobjects/assignment/home.page");
const SignInPage = require("../pageobjects/assignment/Authorization/signInPage");
let AddToCartPage = require("../pageobjects/assignment/Cart Page/cart.page");

describe("It should login and add to cart", async () => {
  it("Click signInButton", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    await expect(HomePage.greetingsIfLoggedin);
    await expect(HomePage.greetingsIfLoggedin).toHaveTextContaining(
      data.firstName
    );
    console.log("I should be logged in");
    await AddToCartPage.clickRandomAnchor();
    await browser.debug();
  });
});
