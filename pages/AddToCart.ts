import {Page, expect, Locator} from '@playwright/test';

export class AddToCart{

    private readonly page: Page;
    private readonly clickSearchProductBar : Locator;
    private readonly searchProduct : Locator;
    private readonly addItem : Locator;
    private readonly addedToCartPopUp : Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickSearchProductBar = page.getByLabel('Search for products');
        this.searchProduct = page.getByPlaceholder('Search for over 70,000 products');
        this.addItem = page.getByRole('button', {name: 'ADD'}).first();
        this.addedToCartPopUp = page.getByText('Added to Cart');
        }

    async addToCart(product: string): Promise<void>
    {
        await this.clickSearchProductBar.click();
        await this.searchProduct.fill(product);
        await this.searchProduct.press('Enter');
        await this.addItem.click();
        await expect(this.addedToCartPopUp).toBeVisible();
        console.log('Item Added To Cart')
        }

    }