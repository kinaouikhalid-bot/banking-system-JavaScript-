# Building a Simple Banking System with JavaScript Classes and ES Modules

## Introduction

This Banking System is a small JavaScript project designed to demonstrate object-oriented programming and modular JavaScript. At its centre is a reusable BankAccount class. The same class is then used by a Node.js demonstration and by a browser-based page.

## 1. Console Output

Run the Node.js demonstration with:

~~~bash
node index.js
~~~

The expected output is:

~~~text
=== BankAccount Demo ===
Initial balances:
Alice (1001) - Balance: £500.00
Bob (1002) - Balance: £150.00

Depositing £200 into Alice's account...
Alice (1001) - Balance: £700.00

Withdrawing £50 from Bob's account...
Bob (1002) - Balance: £100.00

Attempting to withdraw £500 from Bob's account (should fail)...
Expected error: Insufficient funds.

Final balances:
Alice: £700.00
Bob:   £100.00
~~~

Alice moves from £500 to £700. Bob moves from £150 to £100. The attempted £500 withdrawal is rejected because Bob only has £100.

## 2. bankAccount.js

This file defines the reusable class:

~~~js
export class BankAccount {
~~~

The class has three properties:
- accountNumber
- accountHolder
- balance

It has four methods:
- deposit()
- withdraw()
- checkBalance()
- toString()

### Constructor

~~~js
constructor(accountNumber, accountHolder, balance = 0) {
  this.accountNumber = String(accountNumber);
  this.accountHolder = String(accountHolder);
  this.balance = Number(balance);
}
~~~

The constructor runs when new BankAccount(...) is used. The this keyword refers to the individual account object.

### deposit()

The deposit method validates the input before changing the balance. If the amount is invalid or not positive, it throws an error. Otherwise the amount is added to the balance.

### withdraw()

Withdrawal uses the same validation and also checks the available balance. If the withdrawal is greater than the balance, it throws Insufficient funds before changing the balance.

### checkBalance()

This method returns the current balance.

### toString()

This method creates a readable account description and formats the balance to two decimal places.

## 3. index.js

The Node.js file imports the class:

~~~js
import { BankAccount } from "./bankAccount.js";
~~~

It creates Alice and Bob as independent objects, demonstrates deposits and withdrawals, and deliberately tests the insufficient-funds rule.

The failed withdrawal is wrapped in try/catch so the error can be reported while the program continues.

## 4. index.html

The browser version imports the same class:

~~~js
import { BankAccount } from './bankAccount.js';
~~~

The page provides three buttons and exposes the account objects through:

~~~js
window.accounts = { acc1, acc2 };
~~~

The developer console can then call methods such as:

~~~js
accounts.acc1.deposit(100);
accounts.acc1.checkBalance();
~~~

The browser accounts are separate from the accounts created by Node.js.

## 5. package.json

The project contains:

~~~json
{
  "type": "module"
}
~~~

This enables ES module import/export syntax in Node.js.

## 6. How Everything Connects

~~~text
                 bankAccount.js
                BankAccount class
                   /        \
                  /          \
                 ▼            ▼
            index.js      index.html
             Node.js       Browser
~~~

bankAccount.js contains the reusable business logic, while index.js and index.html provide two different ways to use it.

## Conclusion

This project covers important JavaScript foundations: classes, constructors, methods, validation, exceptions, modules, Node.js, and browser interaction. It can be expanded with transfers, transaction history, persistence, authentication, and a complete banking dashboard.
