const prices = [10, 8, 100, 1200, 5000 ];

const mappedPrices = prices.map(price => price *2);

console.log(mappedPrices);  
// Array (6) [ 20, 16, 200, 2400, 1000] 

const employees = [ 
	{ name: 'João', age: 17 },
	{ name: 'Diego', age: 23 },
	{ name: 'Guilherme', age: 18 },
	{ name: 'Matheus', age: 22 },
]

const filteredEmployees = employees.filter(employee => employee.age > 17);

console.log(filteredEmployees);	
/*
Array (3) […]
​0: Object { name: "Diego", age: 23 }
​1: Object { name: "Guilherme", age: 18 }
​2: Object { name: "Matheus", age: 22 }
​length: 3
*/

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];
var pares = function(item) {
	return ! (item % 2);
}

var impares = function(item) {
	return item % 2; 
}

var numerosPar = numeros.filter(pares);
var numerosImpar = numeros.filter(impares);

console.log(numerosPar);
// Array(5) [ 10, 18, 2, 12, 100 ]
console.log(numerosImpares);
// Array(5) [ 10, 18, 2, 12, 100 ]


