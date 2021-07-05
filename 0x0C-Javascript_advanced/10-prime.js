function countPrimeNumbers() {
    let primeNumbers = [];
    for (let i = 2; i <= 100; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0 && j != 1) {
                break
            } else if (j === i - 1) 
                primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

t0 = performance.now();
for (let i = 0; i < 100; i++)
    console.log(countPrimeNumbers());
t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds`);
