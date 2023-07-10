import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KeyPressesPage extends Page {

    public get targetInput() {
        return $('#target');
    }

    public get resultDiv() {
        return $('#result');
    }

    public async clickOnInput() {
        await this.targetInput.click();
    }

    public async keys(keys: string | string[]) {
        await browser.keys(keys);
    }

    public async getResult() {
        return await this.resultDiv.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('key_presses');
    }
}

export default new KeyPressesPage();
