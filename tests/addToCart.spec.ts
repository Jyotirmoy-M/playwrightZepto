import { test } from '../fixtures/testFixtures';
import { testData } from '../test-data/testData';

test('Zepto add to cart', async ({page, addToCart}) =>
{
        await page.goto("https://zepto.com");
        await addToCart.addToCart(testData.product);
    });