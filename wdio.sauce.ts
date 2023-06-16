import {config as sharedConfig} from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: "",
        key: "",
        region: "",
        services: ["sauce"],
        capabilities: [{
            browserName: "chrome",
            browserVersion: "latest",
            platformName: "Windows 10"
        }]
    }
}