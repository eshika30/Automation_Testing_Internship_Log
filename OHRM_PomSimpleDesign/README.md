# OrangeHRM Automation Framework – Playwright POM

## Project Overview
This project is an end-to-end test automation framework developed using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.

The framework automates selected functionalities of the OrangeHRM web application using reusable page objects, action classes, and test scripts.

## Technologies Used
- JavaScript
- Playwright
- Node.js
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
PomSimpleDesign/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js
│   │
│   ├── PageActions/
│   │   ├── AdminnameAction.spec.js
│   │   ├── LoginPageAction.spec.js
│   │   └── MyinfoPageAction.spec.js
│   │
│   ├── PageObjects/
│   │   ├── Adminname.spec.js
│   │   ├── LoginPageObject.spec.js
│   │   └── MyinfoPageObject.spec.js
│   │
│   └── TestScripts/
│       ├── AdminnamesearchScript.spec.js
│       ├── LoginTestScript.spec.js
│       └── MyinfoTestScript.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## Framework Architecture

The framework follows the Page Object Model (POM) design pattern.

- **BaseLibrary:** Contains the base class and common setup functionality.
- **PageObjects:** Defines web elements and their locators.
- **PageActions:** Contains reusable methods to perform user interactions.
- **TestScripts:** Contains test cases that execute application workflows.
- **Playwright Configuration:** Manages browser and test execution settings.

## Test Scenarios

The framework currently includes test scripts for:

1. Login functionality.
2. Admin name search.
3. My Info functionality.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/eshika30/OrangeHRM-Playwright-POM.git
```

### 2. Navigate to the project directory

```bash
cd OrangeHRM-Playwright-POM
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## Execute Tests

Run all test cases:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the HTML report:

```bash
npx playwright show-report
```

## Author

**Eshika Raut**

GitHub: https://github.com/eshika30

---

*Developed as part of my learning journey in Software Testing and Test Automation.*