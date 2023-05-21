import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';

const expandCargoSelector = '#aside [data-link="cargos"]';
const expandCargoListarSelector = '[data-item="listagem"]';
const clickAtivar = '[data-item="cargo"]:nth-of-type(1) [class="btn d-block rounded-5 btn-sm btn-primary"]';
const clickDesativar = '[class="btn d-block rounded-5 btn-sm btn-secondary"]';
const clickPopUp = '[class="swal2-confirm swal2-styled"]';

const nome = "ADM não toma banho";
const desc = "Tudo fedido";
const clickAlterar = '[class="btn w-100 rounded-5 btn-sm btn-outline-secondary mb-1"]';
const nomeSelector = '[placeholder="Nome do cargo"][name="nome"]';
const descricaoSelector = '[name="descricao"]';
const ativoSelector = '[placeholder="Estado de ativação"]';
const clickSalvar = '[class="btn btn-primary flex-grow-1"]';
const clickExcluir = '[data-item="cargo"]:nth-of-type(1) [class="btn w-100 rounded-5 btn-sm btn-danger btn-danger"]';
const clickAvancar = '[nome="proximo"]';
const clickVoltar = '[nome="anterior"]';

test('listagem abre',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);
    await page.close();
});

test('listagem ativo',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // switch to active
    await page.click(clickAtivar);
    await page.click(clickPopUp);
    await page.waitForTimeout(3000);
    await page.close();
});

test('listagem desativo',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // switch to disable
    await page.click(clickAtivar);
    await page.click(clickPopUp);
    await page.click(clickDesativar);
    await page.click(clickPopUp);
    await page.waitForTimeout(3000);
    await page.close();
});

test('listagem alterar nome',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'alterar' and switch name
    await page.click(clickAlterar);
    await page.fill(nomeSelector, nome);
    await page.click(clickSalvar);
    await page.click(clickPopUp);
    await page.waitForTimeout(1000);
    await expect(page.getByText(nome)).toBeVisible();
    await page.close();
});

test('listagem alterar descricao',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'alterar' and switch descricao
    await page.click(clickAlterar);
    await page.fill(descricaoSelector, desc);
    await page.click(clickSalvar);
    await page.click(clickPopUp);
    await page.waitForTimeout(1000);
    await expect(page.getByText(desc)).toBeVisible();
    await page.close();
});

test('listagem alterar ativo',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'alterar' and switch ativo
    await page.click(clickAlterar);
    await page.selectOption(ativoSelector, "true");
    await page.click(clickSalvar);
    await page.click(clickPopUp);
    await page.waitForTimeout(1000);
    await expect(page.getByText("Desativar")).toBeVisible();
    await page.close();
});

test('listagem alterar desativo',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'alterar' and switch desativo
    await page.click(clickAlterar);
    await page.selectOption(ativoSelector, "false");
    await page.click(clickSalvar);
    await page.click(clickPopUp);
    await page.waitForTimeout(1000);
    await expect(page.locator(clickAtivar).getByText('Ativar')).toBeVisible();
    await page.close();
});

test('listagem excluir',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'excluir'
    await page.click(clickExcluir);
    await page.click(clickPopUp);
    await page.click(clickPopUp);
    await expect(page).toHaveTitle(/cpa/);
    await page.close();
});

test('listagem proximo e anterior',  async ({ page }) => {

    await page.goto(serverURL);

    await page.fill(emailSelector, email);
    await page.fill(passwordSelector, password);
  
    // chec if the email is equals to the value filled
    await expect(page.locator(emailSelector)).toHaveValue(email);
    await expect(page.locator(passwordSelector)).toHaveValue(password);

    // click on the button
    await page.click(submitSelector);

    // home verify
    await expect(page).toHaveTitle(/cpa/);

    // click on 'cargos' + 'listar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoListarSelector);

    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);

    // click on 'vai e volta'
    await page.click(clickAvancar);
    await page.waitForTimeout(1000);
    await page.click(clickVoltar);
    await page.waitForTimeout(1000);
    await page.close();
});