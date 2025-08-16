import { expect } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class QuickSell extends LoginPage{
    constructor(page){
        super(page);
        this.amountField = page.locator('[name="amount"]');
        this.profitField = page.locator('[name="profit"]');
        this.customerField = page.locator('[name="customer"]');
        this.numberField = page.locator('[name="number"]');
        this.amountReceivedButton = page.getByText('টাকার মূল্য পেয়েছেন');   
        this.toast = page.locator('[data-content] [data-title]', {hasText: /Quick Sell Added SuccessFully/i}); 
        this.errorMessage = page.getByText('this field is required.');
        this.amountErrorMessage = page.getByText('Amount should be greater than 0');
        this.numberErrorMessage = page.getByText('Phone number must  digits long', {exact: true});


    }

    async enterAmount(amount){
        await this.amountField.fill(amount);
    }

    async enterProfit(amount){
        await this.amountField.fill(amount);
    }

    async enterCustomer(name){
        await this.customerField.fill(name);
    }

    async enterMobile(number){
        await this.numberField.fill(number);
    }

    async submitAmountReceived(){
        await this.amountReceivedButton.click();
    }

    async validateAmountReceived(){
        await expect(this.toast).toBeVisible();
    }

    async validateRequiredField(){
        await expect(this.errorMessage).toBeVisible();
    }

    async getAmountReceivedValue() {
        return await this.amountField.inputValue();
    }

    async validateAmountLimit(){
        const value = await this.getAmountReceivedValue();

        if(Number(value)<0){

            expect(value).not.toContain("-");
            expect(Number(value)).toBeGreaterThan(0);
            return; 
            
        }else if(Number(value)>0){

            expect(Number(value)).toBeLessThanOrEqual(999999);
            return;

        }else if(Number(value) == 0){

            await expect(this.amountErrorMessage).toBeVisible();
            return;

        }        
    }

    async getMobileNumberValue() {
        return await this.numberField.inputValue();
    }

    async validateMobileNumber(){
        const mobile = await this.getMobileNumberValue();

        if (mobile.length !== 11){

            await expect(this.numberErrorMessage).toBeVisible();
            return;

        }else if (!mobile.startsWith("01")) {

            await expect(this.numberErrorMessage).toBeVisible();
            return;
        }
    }
    

}