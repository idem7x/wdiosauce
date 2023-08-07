import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DownloadPage extends Page {

    public get downloadLink () {
        return $("a[href='download/myfile.pdf']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async download () {
        await this.downloadLink.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('download');
    }
}

export default new DownloadPage();
