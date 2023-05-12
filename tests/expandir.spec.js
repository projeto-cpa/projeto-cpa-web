import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';

const expandCargoSelector = '#aside [data-link="cargos"]';
const expandCargoCadastrarSelector = '#aside [data-link="cargos"]';

const expandDisciplinaSelector = '#aside [data-link="disciplinas"]';
const expandDisciplinaCadastrarSelector = '#aside [data-link="disciplinas"]';

const expandTurmaSelector = '#aside [data-link="turmas"]';
const expandTurmaCadastrarSelector = '#aside [data-link="turmas"]';

const expandCursoSelector = '#aside [data-link="cursos"]';
const expandCursoCadastrarSelector = '#aside [data-link="cursos"]';

const expandPerguntaSelector = '#aside [data-link="perguntas"]';
const expandPerguntaCadastrarSelector = '#aside [data-link="perguntas"]';

const expandRespostaSelector = '#aside [data-link="respostas"]';
const expandRespostaCadastrarSelector = '#aside [data-link="respostas"]';

const expandUsuariotaSelector = '#aside [data-link="usuários"]';
const expandUsuarioCadastrarSelector = '#aside [data-link="usuários"]';

const expandEixoSelector = '#aside [data-link="eixos"]';
const expandEixoCadastrarSelector = '#aside [data-link="eixos"]';

test('expandir cargos',  async ({ page }) => {

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

    // click on 'cargos'
    await page.click(expandCargoSelector);

    await page.locator(expandCargoCadastrarSelector);
    await page.click(expandCargoCadastrarSelector);
});

test('expandir disciplinas',  async ({ page }) => {

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

    // click on 'disciplinas'
    await page.click(expandDisciplinaSelector);

    await page.locator(expandDisciplinaCadastrarSelector);
    await page.click(expandDisciplinaCadastrarSelector);
});

test('expandir turmas',  async ({ page }) => {

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

    // click on 'turmas'
    await page.click(expandTurmaSelector);

    await page.locator(expandTurmaCadastrarSelector);
    await page.click(expandTurmaCadastrarSelector);
});

test('expandir cursos',  async ({ page }) => {

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

    // click on 'cursos'
    await page.click(expandCursoSelector);

    await page.locator(expandCursoCadastrarSelector);
    await page.click(expandCursoCadastrarSelector);
});

test('expandir perguntas',  async ({ page }) => {

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

    // click on 'perguntas'
    await page.click(expandPerguntaSelector);

    await page.locator(expandPerguntaCadastrarSelector);
    await page.click(expandPerguntaCadastrarSelector);
});

test('expandir respostas',  async ({ page }) => {

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

    // click on 'respostas'
    await page.click(expandRespostaSelector);

    await page.locator(expandRespostaCadastrarSelector);
    await page.click(expandRespostaCadastrarSelector);
});

test('expandir usuarios',  async ({ page }) => {

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
    // click on 'usuarios'
    await page.click(expandUsuariotaSelector);

    await page.locator(expandUsuarioCadastrarSelector);
    await page.click(expandUsuarioCadastrarSelector);
});

test('expandir eixos',  async ({ page }) => {

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

    // click on 'eixos'
    await page.click(expandEixoSelector);

    await page.locator(expandEixoCadastrarSelector);
    await page.click(expandEixoCadastrarSelector);
});