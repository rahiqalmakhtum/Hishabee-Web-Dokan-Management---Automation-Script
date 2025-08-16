// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/dashboardPage';
import { QuickSell } from '../pages/quicksellPage';


test('Validate Quick Sell functionality with mandatory fields', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('500');
  await quickSell.submitAmountReceived();
  await quickSell.validateAmountReceived();

});

test('Validate Quick Sell functionality with empty fields', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.submitAmountReceived();
  await quickSell.validateRequiredField();

});

test('Validate Quick Sell functionality with cash received amount < 0', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('-100');
  await quickSell.validateAmountLimit();

});

test('Validate Quick Sell functionality with cash received amount = 0', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('0');
  await quickSell.submitAmountReceived();
  await quickSell.validateAmountLimit();

});

test('Validate Quick Sell functionality with cash received amount = 999,999', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('999999');
  await quickSell.validateAmountLimit();

});

test('Validate Quick Sell functionality with cash received amount > 999,999', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('1000000');
  await quickSell.validateAmountLimit();

});

test('Validate Quick Sell functionality with valid mobile number', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('500');
  await quickSell.enterMobile('01888888888');
  await quickSell.validateMobileNumber();

});

test('Validate Quick Sell functionality with invalid mobile number', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openQuickSell();
  await quickSell.enterAmount('500');
  await quickSell.enterMobile('088888888888');
  await quickSell.submitAmountReceived();
  await quickSell.validateMobileNumber();

});

test('Validate product search by name match', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openDueBook();
  await home.validateSearchDue('Ruba');

});

test('Validate product search by mobile number match', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const quickSell = new QuickSell(page);

  await home.login();
  await home.openDueBook();
  await home.validateSearchDue('01872176878');

});
