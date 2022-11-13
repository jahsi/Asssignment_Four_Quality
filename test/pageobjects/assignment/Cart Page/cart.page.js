// const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: click } = require("webdriverio/build/commands/element/click");
const Page = require("../../page");

class Cart extends Page {
  get aListOfAnchorTag() {
    return $('(//li[@class="product-item"]/div/a)[2]');
  }
  get randomAnchorTag() {
    return $(
      `(//li[@class="product-item"]/div/a)[${Math.ceil(Math.random() * 4)}]`
    );
    // // f'//*[@class="destroy"])[{random.randint(startint,endint)}]'
  }

  get seizeAttribute() {
    return $('(//div[@class="swatch-option text"])[1]');
  }

  get randomSizeAttribute() {
    return $(
      `(//div[@class="swatch-option text"])[${Math.ceil(Math.random() * 1)}]`
    );
  }

  get colorForItem() {
    return $('(//div[@class="swatch-option color"])[1]');
  }

  get randomColorAttribute() {
    return $(
      `(//div[@class="swatch-option color"])[${Math.ceil(Math.random() * 2)}]`
    );
  }

  get submitButton() {
    return $('//button[@id="product-addtocart-button"]');
  }

  get successMessage() {
    return $(
      "//div[contains(text(),'You added')]/a[contains(text(),'shopping cart')]"
    );
  }

  async clickRandomAnchor() {
    await this.randomAnchorTag.click();
  }

  async selectRandomAndAddToCart() {
    await this.randomAnchorTag.click();
    await this.randomColorAttribute.click();
    await this.randomSizeAttribute.click();
    await this.submitButton.click();
  }
}

module.exports = new Cart();
