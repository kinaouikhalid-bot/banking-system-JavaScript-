# Banking System Project — Video Walkthrough Script

**Target length:** approximately 2–3 minutes.

## Opening

In this walkthrough, I'm going to show how this simple JavaScript Banking System works. The project demonstrates classes, constructors, methods, validation, error handling, and ES modules, and it uses the same BankAccount class in both Node.js and the browser.

## bankAccount.js

This file exports a BankAccount class. The class stores three properties: the account number, account holder, and balance. The constructor runs when we create a new account. It converts the account number and holder to strings and the balance to a number.

The class then provides four methods: deposit, withdraw, checkBalance, and toString.

## Deposits and withdrawals

The deposit method first validates the amount. It must be a finite number greater than zero. If the input is invalid, the method throws an error. Otherwise, the amount is added to the balance.

The withdraw method uses similar validation, but it also checks that there is enough money in the account. If the withdrawal is greater than the balance, the method throws an Insufficient funds error before changing the balance.

## index.js

In index.js, the class is imported from bankAccount.js. The demo creates two accounts: Alice starts with five hundred pounds and Bob starts with one hundred and fifty.

Alice receives a two-hundred-pound deposit, so her balance becomes seven hundred pounds. Bob withdraws fifty pounds, leaving one hundred.

The program then deliberately attempts to withdraw five hundred pounds from Bob. That fails because there are insufficient funds, and the error is handled using try and catch.

## index.html

The index.html file uses the same BankAccount class through a browser ES module import. It creates its own Alice and Bob accounts and provides three buttons.

The first displays the accounts in the browser console. The second performs a twenty-pound deposit for Alice. The third performs a ten-pound withdrawal from Bob.

The page also exposes the objects through window.accounts, so we can interact with them directly from the browser developer console.

## Module connection

The important structure is that bankAccount.js contains the reusable class. Both index.js and index.html import that class, but they run in different environments.

Node.js creates its own account objects, while the browser creates separate account objects. They share the same class definition, but they do not share the same live account data.

So, although this is a small project, it demonstrates the foundations of object-oriented JavaScript and modular code.
