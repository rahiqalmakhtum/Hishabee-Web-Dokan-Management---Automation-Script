import { expect } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class HomePage extends LoginPage{
    constructor(page){
        super(page);
        this.quickSellButton = page.getByText('বেচা', {exact: true});
        this.quickSellHeader = page.getByText('Quick Sell');
        this.dueBookButton = page.getByText('বাকির খাতা', {exact: true});
        this.dueBookHeader = page.getByTitle('বাকির খাতা');
        this.searchDue = page.getByPlaceholder('কন্টাক্ট খোঁজ করুন');
    }

    async login(){
        await super.navigateToLogin();
        await super.enterPhoneNumber();
        await super.enterPassword();
        await super.loginToDashboard();
        await super.validateLogin();
    }

    async openQuickSell(){
        await expect(async () => {
            await this.quickSellButton.click();
            await expect(this.quickSellHeader).toBeVisible();
        }).toPass()
    }

    async openDueBook(){
        await this.dueBookButton.click();
        await expect(this.dueBookHeader).toBeVisible();
    }

    async validateSearchDue(value){
        await this.searchDue.fill(value);
        await expect(this.page.getByTitle(value)).toBeVisible();
    }


}