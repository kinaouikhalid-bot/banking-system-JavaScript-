# Banking System Project — Video Walkthrough Script

Approximate runtime: 2–3 minutes.

## Opening
Show the project title and the four files.

Narration: This is a simple JavaScript Banking System demonstrating classes, constructors, methods, validation, error handling, and ES modules.

## bankAccount.js
Show the class declaration and constructor. Explain the three properties and the four methods.

## Deposit and withdrawal
Show the validation inside deposit and withdraw. Explain that invalid amounts are rejected and withdrawals cannot exceed the current balance.

## index.js
Show the import statement and the creation of Alice and Bob. Run node index.js and show the expected terminal output, including Alice at £700, Bob at £100, and the expected insufficient-funds error.

## index.html
Show the browser page and the three buttons. Open the developer console and demonstrate accounts.acc1.deposit(100) followed by accounts.acc1.checkBalance().

## Module connection
Show this diagram:

~~~text
bankAccount.js
     /   \
    /     \
index.js  index.html
 Node       Browser
~~~

Explain that both environments import the same class definition but create separate account objects.

## Closing
Summarise the learning outcomes: classes, objects, constructors, methods, validation, error handling, and ES modules. Mention possible extensions such as transfers, transaction history, persistence, authentication, and a banking dashboard.
