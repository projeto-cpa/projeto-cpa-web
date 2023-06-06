import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';
const alertText = "Credenciais incorretas";
const alertText2 = "Verifique os dados";

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';
const alertSelector = '#swal2-title.swal2-title';

test('possui titulo', async ({ page }) => {
  await page.goto(serverURL);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/cpa/);
  await page.close();
});

test('login sucesso', async ({ page }) => {

  await page.goto(serverURL);

  await page.fill(emailSelector, email);
  await page.fill(passwordSelector, password);

  // chec if the email is equals to the value filled
  await expect(page.locator(emailSelector)).toHaveValue(email);
  await expect(page.locator(passwordSelector)).toHaveValue(password);

  // click on the button
  await page.click(submitSelector);

  // verify if the user was redirected to "/" 
  await expect(page).toHaveURL(serverURL + '/');
  await page.close();
});

test('login senha errada', async ({ page }) => {
    
    await page.goto(serverURL);
    
    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, 'senhaerrada123');
    
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email)
    await expect(page.locator(passwordSelector)).toHaveValue('senhaerrada123');
    
    // click on the button
    await page.click(submitSelector);

    // verifica s
    await expect(page.locator(alertSelector)).toHaveText(alertText)
    await page.close();

});

test('login senha vazia', async ({ page }) => {
    
    await page.goto(serverURL);
    
    await page.fill(emailSelector, '');
    await page.fill(passwordSelector, '');
    
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue('')
    await expect(page.locator(passwordSelector)).toHaveValue('');
    
    // click on the button
    await page.click(submitSelector);

    // verifica s
    await expect(page.locator(alertSelector)).toHaveText(alertText2);
    await page.close();

});