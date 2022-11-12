const data = require("../helper/data.js");
const HomePage = require("../pageobjects/assignment/home.page");
const SignInPage = require("../pageobjects/assignment/Authorization/signInPage");
let AddToCartPage = require("../pageobjects/assignment/Cart Page/cart.page");
let CheckoutPage = require("../pageobjects/checkout/checkout.page");
///FIXME: If the item is a bag or does not contain any options then this will not work
describe.skip("It should login and add to cart", async () => {
  it("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    await AddToCartPage.selectRandomAndAddToCart();
    await expect(AddToCartPage.successMessage).toBeExisting();
    await browser.debug();
  });
});

describe("Log In and Purchase stuff", async () => {
  it("AddToCart", async () => {
    await HomePage.openAssignment();
    await HomePage.clickSignInButton();
    await SignInPage.signInWithCredentials(data.email, data.password);
    // await AddToCartPage.selectRandomAndAddToCart();
    await HomePage.addCartanchorTagIfPresent.click();
    await browser.pause(2000);
    await HomePage.proceedToCheckoutButton.click();
    await CheckoutPage.fillOutShippingAddressIfNotUSA();
    await browser.debug();
  });
});
