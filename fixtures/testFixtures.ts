import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {AddToCart} from '../pages/AddToCart';

type MyFixtures = {
    loginPage: LoginPage;
    addToCart: AddToCart;
    };

export const test = base.extend<MyFixtures> ({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
        },

    addToCart: async ({page}, use) => {
        const addToCart = new AddToCart(page);
        await use(addToCart);
        }
    })