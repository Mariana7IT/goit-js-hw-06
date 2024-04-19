"use strict";

// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.



// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str(рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// Оголошений клас StringBuilder
// Властивість value у класі StringBuilder оголошена приватною
// У класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює значення приватної властивості value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padStart
// Метод padStart змінює приватну властивість value екземпляра класу, який його викликає
// У класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює значення приватної властивості value екземпляра класу, який його викликає
// У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт
// Об'єкт builder не містить публічну властивість value
// Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок .
// Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^.
// Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^
// Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="