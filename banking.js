class BankAccount {
    constructor(accountName, accountNumber, depositAmount) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.depositAmount = depositAmount;
    }

    getAccountSummary() {
        return `Account Holder: ${this.accountName}\nAccount Number: ${this.accountNumber}\nDeposit Amount: ₹${this.depositAmount}`;
    }
}
const acc1 = new BankAccount("Lokesh Mamidala", "1234567890", 50000);
console.log(acc1.getAccountSummary());
