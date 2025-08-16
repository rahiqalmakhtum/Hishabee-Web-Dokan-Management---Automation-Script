# Hishabee Internship – Final Task

## 📌 Project Overview

This repository contains automation scripts for 10 test cases from the Hishabee Web (Dokan Management) platform, as part of the internship final task.

The tests validate core functionalities of the system such as:
- Quick Sell
- Product management
- Due management
- Input validation

## 🛠️ Tools & Platform

**Platform:** Hishabee Web (Dokan Management)  
**Automation Tool:** Playwright  
**Language:** JavaScript  

## ✅ Test Cases Automated

1. Validate Quick Sell with valid amount
2. Validate Quick Sell with amount = 0 (error handling)
3. Validate Quick Sell with amount > 999999 (boundary validation)
4. Validate mandatory fields in Quick Sell (amount, customer, etc.)
5. Validate adding a new product
6. Validate searching an existing product
7. Validate Add to Cart functionality
8. Validate Confirm Payment flow
9. Validate Due History search
10. Validate customer mobile number input (11 digits, starts with "01")

*(Full details are documented inside the test files.)*

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/hishabee-automation.git
cd hishabee-automation
```
### 2. Install Dependencies

Make sure you have Node.js (>=16) installed, then run:
```
npm install
```
3. Install Playwright Browsers
```
npx playwright install
```
Ensure stable internet connection (tests run against Hishabee Web).

▶️ Running the Tests

Run all tests:
```
npx playwright test
```
Run with UI mode (for debugging):
```
npx playwright test --ui
```
Run with headed browser:
```
npx playwright test --headed
```
📸 Test Results

All tests were executed successfully.

Screenshots and logs are available in the screenshots folder.

💡 Suggestions for Improvement

Add error validation for amount > 999999 (currently missing).

Improve input field validation for mobile numbers (e.g. Phone number starts with 01)

Change the error message for the invalid phone number to: Phone number must 11 digits long

Add more descriptive error messages for better UX.
