import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';

const expandCargoSelector = '#aside [data-link="cargos"]';
const expandCargoCadastrarSelector = '#aside [data-link="cargos"]';

test('expandir campos',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email)
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cadastros'
    await page.click(expandCargoSelector);

    await page.locator(expandCargoCadastrarSelector);
    await page.click(expandCargoCadastrarSelector);
    
});