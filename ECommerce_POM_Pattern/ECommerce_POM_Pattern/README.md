# E-Commerce Website Automation Testing | Playwright POM

## 📌 Project Overview

This project automates the user registration functionality of the [Automation Exercise](https://www.automationexercise.com/) website using Playwright with JavaScript and the Page Object Model (POM) design pattern.

The framework is designed to maintain reusable methods, separate test logic from page locators, and improve test maintainability.

## 🛠️ Technologies Used

- **Programming Language:** JavaScript
- **Automation Tool:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **IDE:** Visual Studio Code
- **Version Control:** Git & GitHub
- **Browser:** Chromium
- **Website Under Test:** Automation Exercise

## 📂 Project Structure

```text
ECommerce_POM_Pattern/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js
│   │
│   ├── CommonMethods/
│   │   └── CommonMethods.spec.js
│   │
│   ├── PageActions/
│   │   └── RegistrationActions.spec.js
│   │
│   ├── PageObjects/
│   │   └── RegistrationObjects.spec.js
│   │
│   ├── TestScripts/
│   │   └── RegistrationTestScript.spec.js
│   │
│   └── example.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## 🧪 Test Scenarios

### User Registration

1. Navigate to the Automation Exercise website.
2. Click on the Signup/Login button.
3. Enter the user's name and email address.
4. Click the Signup button.
5. Enter account information:
   - Password
   - First Name
   - Last Name
   - Address
   - State
   - City
   - Zipcode
   - Mobile Number
6. Click Create Account.
7. Verify the Account Created confirmation message.
8. Click Continue.

### Account Deletion

1. Click Delete Account.
2. Verify the Account Deleted confirmation message.

## 🏗️ Framework Components

| Component | Responsibility |
|---|---|
| BaseClass | Browser navigation and browser closing |
| CommonMethods | Reusable wait methods |
| RegistrationPageObjects | Locators for registration elements |
| RegistrationActions | Methods to perform registration actions |
| RegistrationTestScript | Executes the registration test scenario |

## ⚙️ Installation and Setup

**Prerequisites:**
- Node.js and npm
- Visual Studio Code
- Git

**Step 1: Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**Step 2: Navigate to the project folder**

```bash
cd ECommerce_POM_Pattern
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Install Playwright browser**

```bash
npx playwright install chromium
```

## ▶️ Execute Tests

Run the complete test suite:

```bash
npx playwright test
```

Run the registration test specifically:

```bash
npx playwright test tests/TestScripts/RegistrationTestScript.spec.js
```

## 📊 Test Reports

Generate and view the HTML report:

```bash
npx playwright show-report
```

## 🎯 Learning Outcomes

- Practical implementation of the Page Object Model.
- Creating reusable browser interaction methods.
- Working with XPath locators.
- Automating end-to-end user registration workflows.
- Performing assertions and validating application responses.
- Organizing automation projects using a structured framework.

## 👩‍💻 Author

**Eshika Raut**

GitHub: [eshika30](https://github.com/eshika30)

---

*This project was developed as part of my hands-on learning and practice in Playwright automation testing.*