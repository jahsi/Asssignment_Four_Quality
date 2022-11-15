const Page = require("../page");

class HomePage extends Page {
  get signInButton() {
    return $(`(//li/a[contains(text(),'Sign')])[1]`);
  }

  get HomeScreenImage() {
    return $(`//a[@class="logo"]`);
  }
  get headerLinkIfSignedIn() {
    return $(`(//button[@data-action="customer-menu-toggle"])[1]`);
  }
  get signOutLink() {
    return $(`(//a[contains(text(),'Sign')])[1]`);
  }
  get accountLink() {
    return $(`(//a[contains(text(),'Account')])[1]`);
  }
  get greetingsIfLoggedin() {
    return $("(//span[@class='logged-in'])[1]");
  }
  get addCartanchorTagIfPresent() {
    return $(`//a[@class="action showcart"]/span[@class="counter qty"]`);
  }
  get proceedToCheckoutButton() {
    return $(`//button[@id="top-cart-btn-checkout"]`);
  }

  get createAccountButton() {
    return $("(//li/a[contains(text(),'Create')])[1]");
  }

  get MyOrdersLink() {
    return $("(//a[contains(text(),'My Orders')])[1]");
  }

  get myTable() {
    return $(`//table[@id="my-orders-table"]`);
  }
  open() {
    return super.openAssignment();
  }
  async signOut() {
    await this.HomeScreenImage.click();
    // await this.signInButton.click();
    await this.headerLinkIfSignedIn.click();
    await this.signOutLink.click();
    console.log("Sign me out");
  }
  async goTOMyOrders() {
    await this.HomeScreenImage.click();
    await this.signInButton.click();
    await this.headerLinkIfSignedIn.click();
    await this.accountLink.click();
    await this.MyOrdersLink.click();
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }
}

module.exports = new HomePage();
