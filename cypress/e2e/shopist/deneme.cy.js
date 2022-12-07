describe("deneme", () => {
it("tests deneme", () => {
  cy.viewport(1404, 937);

  cy.visit("https://www.shopist.io/");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.chairs > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/chairs");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.sofas > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/sofas");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.bedding > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/bedding");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.lighting > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/lighting");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(2) > a.profile > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/profile");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(2) > a.cart > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/cart");

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > a > div > img").click();
  cy.location("href").should("eq", "https://www.shopist.io/");

  cy.get("#main > div > section > div.jumbotron.jumbotron-large > a > div > div:nth-child(3)").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/chairs");

  cy.get("#main > div.products > div:nth-child(1) > div:nth-child(1) > a > div > img").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/chairs/product/1");

  cy.get("#main > section > div.item > div > div > div.purchase-button").click();

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(2) > a.cart > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/cart");

  cy.get("#main > section > div.blocks > div.products > div:nth-child(3) > div > div > div.product-bottom > div.product-counter > div.remove-button").click();

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(1) > a.chairs > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/chairs");

  cy.get("#main > div.products > div:nth-child(1) > div:nth-child(1) > a > div > img").click();
  cy.location("href").should("eq", "https://www.shopist.io/department/chairs/product/1");

  cy.get("#main > section > div.item > div > div > div.purchase-button").click();

  cy.get("#__layout > div > div:nth-child(1) > div.navbar-large > div > div:nth-child(2) > a.cart > div > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/cart");

  cy.get("#main > section > div.blocks > div.summary > div.discount > input").click();

  cy.get("#main > section > div.blocks > div.summary > div.discount > input").type("111");

  cy.get("#main > section > div.blocks > div.summary > div.discount > div").click();

  cy.get("#main > section > div.blocks > div.summary > div.discount > input").click();

  cy.get("#main > section > div.blocks > div.summary > div.discount > input").clear();

  cy.get("#main > section > div.blocks > div.summary > div.discount > input").click();

  cy.get("#main > section > div.blocks > div.summary > div.discount > div").click();

  cy.get("#main > section > div.blocks > div.summary > div.checkout").click();

  cy.get("#main > div > a > div").click();
  cy.location("href").should("eq", "https://www.shopist.io/");

  });
});
//# recorderSourceMap=BCCECGDJDMDPDSDVDYDbDeDhBCjBDmBCoBDrBDuBCwBDzBC1BC3BC5BC7BC9BC/BChCCjCD
