# Building a Simple Banking System with JavaScript Classes and ES Modules

This project is a small Banking System designed to demonstrate object-oriented JavaScript and ES modules. It contains a reusable `BankAccount` class, a Node.js demonstration, and a browser interface.

## Console Output

Run:

```bash
node index.js
```

The demonstration produces:

```text
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
```

## bankAccount.js

The core of the project is the exported `BankAccount` class.

It stores three properties:

- `accountNumber`
- `accountHolder`
- `balance`

It provides four methods:

- `deposit()`
- `withdraw()`
- `checkBalance()`
- `toString()`

The constructor runs when an account is created:

```js
constructor(accountNumber, accountHolder, balance = 0) {
  this.accountNumber = String(accountNumber);
  this.accountHolder = String(accountHolder);
  this.balance = Number(balance);
}
```

The use of `this` means each property belongs to the individual account object.

### Depositing

`deposit(amount)` validates the input before adding it to the balance. Zero, negative and non-finite values are rejected.

### Withdrawing

`withdraw(amount)` performs the same basic validation and then checks whether the requested amount is greater than the current balance. If it is, the method throws:

```text
Insufficient funds.
```

The balance is only changed after all validation passes.

### Formatting and balance checks

`checkBalance()` returns the current numeric balance.

`toString()` produces readable output such as:

```text
Alice (1001) - Balance: £500.00
```

## index.js

`index.js` imports the class:

```js
import { BankAccount } from "./bankAccount.js";
```

It then creates Alice and Bob:

```js
const acc1 = new BankAccount("1001", "Alice", 500);
const acc2 = new BankAccount("1002", "Bob", 150);
```

Alice receives £200, while Bob withdraws £50. A later £500 withdrawal is deliberately attempted so the error-handling behaviour can be demonstrated.

The failed withdrawal is wrapped in `try...catch`, allowing the program to continue and display the final balances.

## index.html

The browser version imports the same class using:

```html
<script type="module">
  import { BankAccount } from './bankAccount.js';
</script>
```

The page provides buttons for displaying accounts, depositing £20 into Alice's account and withdrawing £10 from Bob's account.

It also exposes the objects through:

```js
window.accounts = { acc1, acc2 };
```

This allows direct interaction from the browser developer console.

## package.json

The project uses:

```json
{
  "type": "module"
}
```

This tells Node.js to use ES module syntax, allowing `export` and `import`.

## How Everything Connects

```
                 bankAccount.js
                BankAccount class
                   /        \
                  /          \
                 ▼            ▼
            index.js      index.html
             Node.js       Browser
```

The class is reusable, but the account instances are not shared between Node.js and the browser. Each environment creates its own Alice and Bob objects.

## What This Demonstrates

The project covers classes, objects, constructors, methods, validation, exceptions, `try...catch`, ES modules and browser interaction.

It is a small foundation that could later be expanded with transfers, transaction history, persistent storage, authentication and a complete banking dashboard.
