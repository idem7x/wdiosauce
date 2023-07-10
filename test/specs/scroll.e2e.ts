import KeyPressesPage from "../pageobjects/key.presses.page";

describe('Scroll', () => {
    it('Scroll', async () => {
        await KeyPressesPage.open();
        await KeyPressesPage.clickOnInput();

        await KeyPressesPage.keys("Space");
        await expect(await KeyPressesPage.getResult()).toContain("SPACE");

    });
});


