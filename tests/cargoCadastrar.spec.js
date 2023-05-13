import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';

const expandCargoSelector = '#aside [data-link="cargos"]';
const expandCargoCadastrarSelector = '#aside [data-link="cargos"]';

const nomeCargo = 'Teste de cargo';
const descricaoCargo = 'Teste teste teste';
const ativoSelector = '#cadastro-cargo [name="ativo"]';

const insertNomeSelector = '[name="nome"]';
const insertDescricaoSeletor = '[name="descricao"]';

const sendSelector = '#enviar-cargo';
const alertSelector = '#swal2-title.swal2-title';
const alertText = 'Sucesso ao cadastrar';
const clickConfirmSelector = '.swal2-container .swal2-actions .swal2-confirm';

//CPA - Tela de listagem de cargos
//.swal2-container .swal2-actions .swal2-confirm


test('cadastro passa ativo',  async ({ page }) => {

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

    // click on 'cargos' + 'cadastrar'
    await page.click(expandCargoSelector);
    await page.click(expandCargoCadastrarSelector);

    // input
    await page.fill(insertNomeSelector, nomeCargo);
    await page.fill(insertDescricaoSeletor, descricaoCargo);
    await page.selectOption(ativoSelector, "true");
    await expect(page.locator(ativoSelector)).toHaveValue("true");

    await page.click(sendSelector);
    await expect(page.locator(alertSelector)).toHaveText(alertText);

    await page.click(clickConfirmSelector);    
    await expect(page).toHaveTitle(/CPA - Tela de listagem de cargos/);
});