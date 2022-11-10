// const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: click } = require("webdriverio/build/commands/element/click");
const Page = require("../../page");

class Cart extends Page {
  get aListOfAnchorTag() {
    return $('(//li[@class="product-item"]/div/a)[2]');
  }

  get randomAnchorTag() {
    return $(
      `(//li[@class="product-item"]/div/a)[${Math.ceil(Math.random() * 5)}]`
    );
    // // f'//*[@class="destroy"])[{random.randint(startint,endint)}]'
  }
  async clickRandomAnchor() {
    await this.randomAnchorTag.click();
  }
}

module.exports = new Cart();
