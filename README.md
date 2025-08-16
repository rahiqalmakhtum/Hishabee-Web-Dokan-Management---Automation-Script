Hishabee Internship – Final Task
📌 Project Overview

This repository contains automation scripts for 10 test cases from the Hishabee Web (Dokan Management) platform, as part of the internship final task.

The tests validate core functionalities of the system such as Quick Sell, product management, due management, and input validation.

🛠️ Tools & Platform

Platform: Hishabee Web (Dokan Management)

Automation Tool: Playwright

Language: JavaScript 

Test Runner: Playwright Test

✅ Test Cases Automated

Validate Quick Sell with valid amount

Validate Quick Sell with amount = 0 (error handling)

Validate Quick Sell with amount > 999999 (boundary validation)

Validate mandatory fields in Quick Sell (amount, customer, etc.)

Validate adding a new product

Validate searching an existing product

Validate Add to Cart functionality

Validate Confirm Payment flow

Validate Due History search

Validate customer mobile number input (11 digits, starts with "01")

(Full details are documented inside the test files.)

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/hishabee-automation.git
cd hishabee-automation

2. Install Dependencies

Make sure you have Node.js (>=16) installed, then run:

npm install

3. Install Playwright Browsers
npx playwright install

Ensure stable internet connection (tests run against Hishabee Web).

▶️ Running the Tests

Run all tests:

npx playwright test

Run with UI mode (for debugging):

npx playwright test --ui

Run with headed browser:

npx playwright test --headed

📸 Test Results

All tests were executed successfully.

Screenshots and logs are available in the screenshots folder.

💡 Suggestions for Improvement

Add error validation for amount > 999999 (currently missing in the app).

Improve input field validation for mobile numbers.

Add more descriptive error messages for better UX.
