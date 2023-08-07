import {config as sharedConfig} from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: "chrome",
            "goog:chromeOptions": {
                args: [
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-extensions",
                    "--disable-web-security",
                    // "--headless=new",
                    "--window-size=1600,900",
                    "--disable-gpu",
                    "--enable-logging --v=1",
                    "--ignore-certificate-errors",
                    "--unlimited-storage"
                ],
                prefs: {
                    "profile.default_content_settings.popups": 2,
                    "download.default_directory": __dirname + "/test/resources",
                    "plugins.always_open_pdf_externally": true
                }
            }
        }]
    }
}