const Page = require("../page");

class CheckoutPage extends Page {
  get shippingEmailAddress() {
    return $(
      `//div[@class="control _with-tooltip"]/input[@id="customer-email"]`
    );
  }

  get firstName() {
    return $(`//div[@name="shippingAddress.firstname"]/div/input`);
  }

  get lastName() {
    return $(`//div[@name="shippingAddress.lastname"]/div/input`);
  }

  get company() {
    return $(`//div[@name="shippingAddress.company"]/div/input`);
  }

  get shippingStreetAddress() {
    return $(`//div[@name="shippingAddress.street.0"]/div/input`);
  }

  get city() {
    return $(`//div[@name="shippingAddress.city"]/div/input`);
  }
  ////  This will be if you return  the country as s United State
  get optionDropDownElement() {
    return $(`//select[@name="region_id"]`);
  }
  get optionDropdownForStates() {
    return $(`(//select[@name="region_id"]/option)[2]`);
  }

  get randomState() {
    return $(
      `(//select[@name="region_id"]/option[${Math.ceil(Math.random() * 63)}]`
    );
  }

  get inputForCountryIfNotUSA() {
    return $(`//div[@class="control"]/input[@name="region"]`);
  }

  get countrySelectDropDown() {
    return $(`(//select[@name="country_id"])`);
  }
  get randomCountryOptionDropDown() {
    return $(
      `(//select[@name="country_id"]/option)[${Math.ceil(Math.random() * 252)}]`
    );
  }

  get postCode() {
    return $(`//div[@name="shippingAddress.postcode"]/div/input`);
  }
  get telephone() {
    return $(`//div[@name="shippingAddress.telephone"]/div/input`);
  }
  get shippingMethodRadioButton() {
    return $(`(//td/input[@type="radio"])[1]`);
  }

  get nextContinueButton() {
    return $(`//button[@type="submit"][@data-role="opc-continue"]`);
  }
  get placeOrderButton() {
    return $(`//button[@class="action primary checkout"]`);
  }
  async fillOutShippingAddressIfNotUSA() {
    await this.countrySelectDropDown.click();
    await this.randomCountryOptionDropDown.click();
    await this.firstName.setValue("John");
    await this.lastName.setValue("Doe");
    await this.company.setValue("MetaCortex");

    await this.shippingStreetAddress.setValue("21 First Street");
    await this.city.setValue("LittleRoot");
    await this.inputForCountryIfNotUSA.setValue("John's Road");
    await this.postCode.setValue("90210");
    await this.telephone.setValue("1-800-273-8255");

    await browser.pause(5000);
    await this.shippingMethodRadioButton.click();
    await this.nextContinueButton.click();
    await browser.pause(5000);
    await this.placeOrderButton.click();
  }
}

//
//    //div[@name="shippingAddress.company"]/div/input

//    //div[@name="shippingAddress.company"]/div/input

module.exports = new CheckoutPage();
