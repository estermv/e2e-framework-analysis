const { By, Builder, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function (env) {
  describe("Ecommerce", function () {
    this.timeout(10000);
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
      return driver;
    });

    after(async () => await driver.quit());

    it("should add items to cart", async function () {
      await driver.get("https://demo.vercel.store/");

      await driver.manage().setTimeouts({ implicit: 500 });

      await driver
        .findElement(By.css('[aria-label="Special Edition T-Shirt"]'))
        .click();

      const locator = await By.css('[role="option"][aria-label="size l"]')
      await driver.wait(until.elementLocated(locator), 10000);
      await driver.findElement(locator).click();

      await driver
        .findElement(By.css('button[aria-label="Add to Cart"]'))
        .click();

      await assert(
        driver.findElements(
          By.xpath("//*[contains(text(), 'Special Edition T-Shirtn')]")
        )
      );
    });

  //   it('search', async function() {
  //     await driver.get('https://demo.vercel.store/');

  //     let searchInput = await driver.findElement(By.css('input[placeholder*="Search"]'));
  //     await searchInput.click();
  //     await searchInput.sendKeys('shirt');
  //     await searchInput.sendKeys('webdriver', driver.Key.ENTER);
  //     let searchResults = await driver.findElements(By.css('h3'));
  //     expect(searchResults.length).to.be.at.least(1);
  // });
  });
});
