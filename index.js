// index.js
// Node usage example. This file uses ES module syntax.
import { BankAccount } from "./bankAccount.js";

function demo() {
  console.log("=== BankAccount Demo ===");

  const acc1 = new BankAccount("1001", "Alice", 500);
  const acc2 = new BankAccount("1002", "Bob", 150);

  console.log("Initial balances:");
  console.log(acc1.toString());
  console.log(acc2.toString());

  console.log("\nDepositing £200 into Alice's account...");
  acc1.deposit(200);
  console.log(acc1.toString());

  console.log("\nWithdrawing £50 from Bob's account...");
  try {
    acc2.withdraw(50);
    console.log(acc2.toString());
  } catch (err) {
    console.error("Withdrawal failed:", err.message);
  }

  console.log("\nAttempting to withdraw £500 from Bob's account (should fail)...");
  try {
    acc2.withdraw(500);
  } catch (err) {
    console.error("Expected error:", err.message);
  }

  console.log("\nFinal balances:");
  console.log(`Alice: £${acc1.checkBalance().toFixed(2)}`);
  console.log(`Bob:   £${acc2.checkBalance().toFixed(2)}`);
}

demo();
