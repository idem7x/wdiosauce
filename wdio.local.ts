import {config as sharedConfig} from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: "chrome"
        }]
    }
}