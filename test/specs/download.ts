import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import DownloadPage from "../pageobjects/download.page";

describe('Reload session bug', () => {
    it('download', async () => {
        await DownloadPage.open();
        await DownloadPage.download();

        await browser.pause(4000);
    });

    it('reloadSession', async () => {
        await LoginPage.open();
        await browser.reloadSession();
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

    });
});


