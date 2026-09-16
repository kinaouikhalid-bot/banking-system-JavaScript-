// bankAccount.js
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
    return `${this.accountHolder} (${this.accountNumber}) - Balance: £${this.balance.toFixed(2)}`;
  }
}
