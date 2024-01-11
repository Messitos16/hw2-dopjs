let values = [100, 55, 20];
let sumResult = 0;
for (let i = 0; i < values.length; i++) {
    console.log(`${sumResult} + ${values[i]} = ${sumResult + values[i]}`);
    sumResult += values[i];
}
console.log("Итоговая сумма:", sumResult);