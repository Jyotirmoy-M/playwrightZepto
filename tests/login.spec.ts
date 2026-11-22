import { test } from '../fixtures/testFixtures'
import { expect} from '@playwright/test';
import { testData } from '../test-data/testData';

test ('Zepto login', async ({page, loginPage}) => {

    await page.goto("https://zepto.com");
    await expect(page).toHaveTitle(/Zepto/i);
    await page.waitForLoadState('load');

    await loginPage.login(testData.phoneNumber);
    await page.context().storageState({
        path:'playwright/.auth/user.json'})
     });

