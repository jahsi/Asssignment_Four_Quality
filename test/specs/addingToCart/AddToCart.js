const data = require("../../helper/data.js");
const edgedata = require("../../helper/edgeData");
const HomePage = require("../../pageobjects/assignment/home.page");
const SignInPage = require("../../pageobjects/assignment/Authorization/signInPage");
let AddToCartPage = require("../../pageobjects/assignment/Cart Page/cart.page");
let CheckoutPage = require("../../pageobjects/checkout/checkout.page");
///FIXME: If the item is a bag or does not contain any options then this will not work
let browserName = browser.capabilities.browserName;
describe("It should login and add to cart", async () => {
  let webdata = "";
  if (browserName == "chrome") {
    webdata = data;
  } else {
    webdata = edgedata;
  }
  afterEach(function () {
    // HomePage.signOut();
  });
  // beforeEach(function () {
  //   HomePage.HomeScreenImage.click();
  // });
  it("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(webdata.email, webdata.password);
    await AddToCartPage.selectRandomAndAddToCart();
    await expect(AddToCartPage.successMessage).toBeExisting();
    await browser.pause(3000);
    // await HomePage.HomeScreenImage.click();
    await HomePage.signOutCartTest();
    // await browser.debug();
  });
});
// Only works if you did not puchase before
describe("Log In and Purchase stuff", async () => {
  let webdata = "";
  if (browserName == "chrome") {
    webdata = data;
  } else {
    webdata = edgedata;
  }
  it("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(webdata.email, webdata.password);
    // await AddToCartPage.selectRandomAndAddToCart();
    await HomePage.addCartanchorTagIfPresent.click();
    await browser.pause(2000);
    await HomePage.proceedToCheckoutButton.click();
    await browser.pause(2000);
    // await browser.debug();
    let element = await CheckoutPage.newAddress;
    let displayed = element.isDisplayed();
    if (displayed) {
      CheckoutPage.flowIfAddressExists();
    } else {
      await CheckoutPage.placeOrderButton.waitForDisplayed();
      await CheckoutPage.fillOutShippingAddressIfNotUSA();
    }
    // await browser.debug();
    // await expect(CheckoutPage.ThankyouMessage).toBeExisting();

    // await CheckoutPage.ThankyouMessage.isDisplayed();
    await browser.debug();
    // await HomePage.signOutCartTest();
  });
});
