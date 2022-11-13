const data = require("../helper/data.js");
const HomePage = require("../pageobjects/assignment/home.page");
const SignInPage = require("../pageobjects/assignment/Authorization/signInPage");
let AddToCartPage = require("../pageobjects/assignment/Cart Page/cart.page");
let CheckoutPage = require("../pageobjects/checkout/checkout.page");
///FIXME: If the item is a bag or does not contain any options then this will not work

describe("It should login and add to cart", async () => {
  afterEach(function () {
    // HomePage.signOut();
  });
  // beforeEach(function () {
  //   HomePage.HomeScreenImage.click();
  // });
  it.skip("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    await AddToCartPage.selectRandomAndAddToCart();
    await expect(AddToCartPage.successMessage).toBeExisting();
    await browser.pause(3000);
    // await HomePage.HomeScreenImage.click();
    await HomePage.signOut();
    await browser.debug();
  });
});
// Only works if you did not puchase before
describe("Log In and Purchase stuff", async () => {
  it.skip("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    // await AddToCartPage.selectRandomAndAddToCart();
    await HomePage.addCartanchorTagIfPresent.click();
    await browser.pause(2000);
    await HomePage.proceedToCheckoutButton.click();
    await browser.pause(2000);
    let element = await CheckoutPage.newAddress;
    let displayed = element.isDisplayed();
    if (displayed) {
      CheckoutPage.flowIfAddressExists();
    } else {
      await CheckoutPage.fillOutShippingAddressIfNotUSA();
    }
    await expect(CheckoutPage.ThankyouMessage).toHaveTextContaining("Thank");
    // await CheckoutPage.ThankyouMessage.isDisplayed();
    await browser.debug();
    await HomePage.signOut();
  });
});
