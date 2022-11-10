// const { default: $ } = require("webdriverio/build/commands/browser/$");
const { default: click } = require("webdriverio/build/commands/element/click");
const Page = require("../../page");

class Cart extends Page {
  get aListOfAnchorTag() {
    return $('(//li[@class="product-item"]/div/a)[1]');
  }

  get randomAnchorTag() {
    return $(
      `(//li[@class="product-item"]/div/a)["${Math.floor(
        Math.random() * 5 + 1
      )}"]`
    );
    // // f'//*[@class="destroy"])[{random.randint(startint,endint)}]'
  }
  async clickRandomAnchor() {
    await this.randomAnchorTag.click();
  }
}

module.exports = new Cart();
