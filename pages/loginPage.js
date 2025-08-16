import { expect } from '@playwright/test';
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.inputField = page.locator('[name="mobile_number"]');
        this.nextButton = page.getByRole('button', { name: 'এগিয়ে যান' });
        this.password = page.locator('#current_password');
        this.loginButton = page.getByRole('button', { name: 'লগইন করুন' });
        this.selectShop = page.locator('[title="সিলেক্ট করুন"]');

    }

    async navigateToLogin(){
        await this.page.goto('https://web.hishabee.business/auth');

    }

    async enterPhoneNumber(){
        await this.inputField.fill('01872176878');
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.click();
    }

    async enterPassword(){
        await this.page.waitForResponse(/\/auth\/pin/);
        await this.password.fill('14691');
    }

    async loginToDashboard(){
        await expect(async ()=>{
            await expect(this.loginButton).toBeVisible();
            await this.loginButton.click();
            await this.page.waitForResponse(/shop/);
            await this.selectShop.click();
        }).toPass()
        
    }

    async getResponse() {
        const res = await this.page.waitForResponse(
            res => res.url().includes('home'),
            { timeout: 60000 } 
        );
        console.log('response status:', res.status());

        return res.status() === 200;
    }

    async validateLogin(){
        const statusOk = await this.getResponse();
        await expect(statusOk).toBeTruthy();
    }

}