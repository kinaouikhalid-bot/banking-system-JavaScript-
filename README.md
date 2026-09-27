# Banking System — JavaScript OOP Project

A simple Banking System built with JavaScript to demonstrate classes, objects, constructors, methods, validation, error handling, and ES modules.

## Project Structure

~~~text
banking-system-JavaScript-/
├── bankAccount.js
├── index.js
├── index.html
└── package.json
~~~

## What the Project Does

The BankAccount class stores an account number, account holder, and balance. It provides deposit, withdraw, checkBalance, and toString methods.

The class is demonstrated in two environments:
1. Node.js through index.js
2. The browser through index.html

## Running the Node.js Demo

package.json contains:

~~~json
{
  "type": "module"
}
~~~

Run:

~~~bash
node index.js
~~~

Expected output:

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

## How BankAccount Works

The class is exported from bankAccount.js:

~~~js
export class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = String(accountNumber);
    this.accountHolder = String(accountHolder);
    this.balance = Number(balance);
  }

  deposit(amount) {
    amount = Number(amount);

    if (!isFinite(amount) || amount <= 0) {
      throw new Error("Deposit amount must be a positive number.");
    }

    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    amount = Number(amount);

    if (!isFinite(amount) || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }

    this.balance -= amount;
    return this.balance;
  }

  checkBalance() {
    return this.balance;
  }

  toString() {
    return this.accountHolder + " (" + this.accountNumber + ") - Balance: £" + this.balance.toFixed(2);
  }
}
~~~

### Constructor

The constructor initialises each account. For example:

~~~js
const acc1 = new BankAccount("1001", "Alice", 500);
~~~

### Deposit

~~~js
acc1.deposit(200);
~~~

changes Alice's balance from £500 to £700.

The method rejects invalid or non-positive amounts.

### Withdraw

~~~js
acc2.withdraw(50);
~~~

subtracts £50 from Bob's balance.

A withdrawal greater than the available balance throws an Insufficient funds error.

### Balance and formatting

~~~js
acc1.checkBalance();
acc1.toString();
~~~

return the current balance and a formatted account description.

## Error Handling

The Node.js demonstration uses try/catch:

~~~js
try {
  acc2.withdraw(500);
} catch (err) {
  console.error("Expected error:", err.message);
}
~~~

This handles the expected failure without terminating the demonstration.

## Browser Version

index.html imports the same class:

~~~js
import { BankAccount } from './bankAccount.js';
~~~

It creates its own Alice and Bob accounts and provides buttons for showing the accounts, depositing £20 into Alice, and withdrawing £10 from Bob.

The page exposes the objects through:

~~~js
window.accounts = { acc1, acc2 };
~~~

The browser console can therefore run:

~~~js
accounts.acc1.deposit(100);
accounts.acc1.checkBalance();
~~~

## Module Connection

~~~text
                 bankAccount.js
                BankAccount class
                   /        \
                  /          \
                 ▼            ▼
            index.js      index.html
             Node.js       Browser
~~~

Both files import the same class, but each environment creates separate account objects.

## Learning Outcomes

This project demonstrates:
- JavaScript classes and objects
- constructors and properties
- methods and encapsulation
- input validation
- throw and try/catch
- ES module export/import
- Node.js execution
- browser modules
- interaction through window.accounts

## Possible Extensions

- Transfers between accounts
- Transaction history
- Multiple customers
- Persistent storage or a database
- Authentication
- Interest calculations
- A full banking dashboard

See BANKING_SYSTEM_BLOG.md for the longer written walkthrough and BANKING_SYSTEM_VIDEO_SCRIPT.md for the project video script.
