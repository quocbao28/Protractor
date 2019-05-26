import { browser, element, ElementFinder, by } from 'protractor';
import { url } from 'inspector';

describe('TestSutie_01 - Create new Contact', () => {
  beforeAll(() => {
    browser.get('');
  });
  it('TC_01 - Create new contact with name', function createNewContact() {
    const createNewContactButton: ElementFinder = element(by.id('add-contact'));
    createNewContactButton.click();

    const addContactText = element(by.xpath(`//h4[text()='Add New Contact']`));
    expect(addContactText.isDisplayed()).toBe(true);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + `/add`);

    const nameTextBox = element(by.id('contact-name'));
    nameTextBox.sendKeys('Protractor API');
    nameTextBox.getAttribute('value').then(function(nameValue: string) {
      console.log(nameValue);
    });
    expect(nameTextBox.getAttribute('value')).toEqual('Protractor API');

    const createButton = element(by.css('.create-button'));
    createButton.click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + `/`);
  });
});
