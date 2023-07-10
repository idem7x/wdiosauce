import {config as sharedConfig} from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: "",
        key: "",
        hostname: 'ondemand.eu-central-1.saucelabs.com',
        services: ["sauce"],
        capabilities: [{
            browserName: "MicrosoftEdge",
            browserVersion: "latest",
            platformName: "Windows 10"
        }]
    }
}