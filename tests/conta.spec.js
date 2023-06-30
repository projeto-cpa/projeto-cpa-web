import { test, expect } from '@playwright/test';

const serverURL = 'http://localhost:3005';
const email = 'jorge@email.com';
const password = 'admin';
const novaSenha = 'admin'

const emailSelector = '[name="email"][id="email"]';
const passwordSelector = '[name="password"][id="password"]';
const submitSelector = '[name="submit"][id="submit"]';
const alertSelector = '.swal2-container .swal2-confirm';
const clickConta = '[data-link="conta"][title="Conta"]';
const clickEditar = '[data-bs-target="#senha"][data-id="1"]';
const senhaAtual = '[type="password"][id="senha-atual"]';
const senhaNova = '[type="password"][id="nova-senha"]';
const confirmarSenha = '[type="password"][id="confirmar-senha"]';
const clickSalvar = '[type="button"][class="btn btn-primary"]';
const clickConfirmar = '[class="swal2-confirm swal2-styled"]';
const inputFileFoto = '#upload-foto'
const pathFoto = 'C:/Users/LucasdeOliveiraNeitz/OneDrive - Biopark/Área de Trabalho/logo_azul.png'
const filenameFoto = 'logo_azul.png'
const labelNomeFoto = '#label-foto'
const alertSelector = '#swal2-title.swal2-title';
const alertText = 'Confirmar alteração';
const clickConfirmSelector = '.swal2-container .swal2-actions .swal2-confirm';
const clickFoto = '[id="customFile"][type="file"]';
const [fileChooser] = await Promise.all([
  // It is important to call waitForEvent before click to set up waiting.
  page.waitForEvent('filechooser'),
  // Opens the file chooser.
  page.locator('#uploadFile').click(),
])

test('alterar senha passa', async ({ page }) => {

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

  await page.click(clickConta);
  await page.click(clickEditar);
  await page.fill(senhaAtual, password);
  await page.fill(senhaNova, novaSenha);
  await page.fill(confirmarSenha, novaSenha);
  await page.click(clickSalvar)
  await page.click(clickConfirmar)
  await page.click(alertSelector)

  await page.fill(emailSelector, email);
  await page.fill(passwordSelector, novaSenha);

  // chec if the email is equals to the value filled
  await expect(page.locator(emailSelector)).toHaveValue(email);
  await expect(page.locator(passwordSelector)).toHaveValue(novaSenha);

  // click on the button
  await page.click(submitSelector);

  await page.close();
});

// test('enviar foto', async ({ page }) => {

//   await page.goto(serverURL);

//   await page.fill(emailSelector, email);
//   await page.fill(passwordSelector, password);

//   // chec if the email is equals to the value filled
//   await expect(page.locator(emailSelector)).toHaveValue(email);
//   await expect(page.locator(passwordSelector)).toHaveValue(password);

//   // click on the button
//   await page.click(submitSelector);

//   // verify if the user was redirected to "/" 
//   await expect(page).toHaveURL(serverURL + '/');

//   await page.click(clickConta);

//   await expect(page.locator("header h1")).toHaveText('Tela minha conta');

//   await page.click(inputFileFoto); 

//   await page.setInputFiles(inputFileFoto, pathFoto);

//   await expect(page.locator(alertSelector)).toHaveText(alertText);

//   await page.click(clickConfirmSelector);
  
//   await expect(page.locator(labelNomeFoto)).toContainText(filenameFoto);

// });

// test('alterar foto', async ({ page }) => {

// const [fileChooser] = await Promise.all([
//   // It is important to call waitForEvent before click to set up waiting.
//   page.waitForEvent('filechooser'),
//   // Opens the file chooser.
//   page.locator('#uploadFile').click(),
// ])

//   await page.goto(serverURL);

//   await page.fill(emailSelector, email);
//   await page.fill(passwordSelector, password);

//   // chec if the email is equals to the value filled
//   await expect(page.locator(emailSelector)).toHaveValue(email);
//   await expect(page.locator(passwordSelector)).toHaveValue(password);

//   // click on the button
//   await page.click(submitSelector);

//   // verify if the user was redirected to "/"
//   await expect(page).toHaveURL(serverURL + '/');

//   await page.click(clickConta);
//   await fileChooser.setFiles([
//     'D:/GitHub/teste.PNG'
//   ])
//   await page.click(clickFoto);

//   await page.close();
// });

