import { test } from '../fixtures/testFixtures';
import { testData } from '../test-data/testData';

test('Zepto add to cart', async ({page, addToCart}) =>
{
    console.log('Current URL:', page.url());
    console.log('Page title:', await page.title());
    console.log('Page HTML:', (await page.locator('body').innerText()).slice(0, 500));
    await page.goto("https://zepto.com");
    await addToCart.addToCart(testData.product);
});