import {Page, expect, Locator} from '@playwright/test';

export class LoginPage{
    private readonly page:Page;
    private readonly btnLogin:Locator;
    private readonly txtPhoneNumber:Locator;
    private readonly btnContinue:Locator;
    private readonly iconProfile:Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnLogin = page.getByRole('button', {name: 'login'});
        this.txtPhoneNumber = page.getByPlaceholder('Enter Phone Number');
        this.btnContinue = page.getByRole('button', {name: 'Continue'});
        this.iconProfile = page.getByText('Profile');
    }

    async login(phoneNumber: string): Promise<void>
    {

        await this.btnLogin.click();
        await expect(this.txtPhoneNumber).toBeVisible();
        await this.txtPhoneNumber.fill(phoneNumber);
        await this.btnContinue.click();
        await this.page.pause();
        //User enters OTP

        await expect(this.iconProfile).toBeVisible();
        console.log('Login successful');
        }
    }