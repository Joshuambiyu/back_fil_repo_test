function createBankAccount<T extends number>(owner: string, initialBalance: T) {
    let balance = initialBalance; //private variable

    return { //factory function
        deposit(amount: T) {
            balance = (balance + (amount as any)) as T;
            console.log(`${owner} deposited ${amount}. Balance: ${balance}`);
            return this // to enable chaining
        },
        withdraw(amount: T) {
            if (amount > balance) {
                console.log("Insufficient funds");
                return;
            }
            balance = (balance - (amount as any)) as T;
            console.log(`${owner} withdrew ${amount}. Balance: ${balance}`);
            return this //to enable chaining
        },
        getBalance() {
            return balance;
        }
    };
}
// account creation usage
const bankUsage = createBankAccount("Joshua", 100)
console.log(bankUsage.deposit(100).getBalance())