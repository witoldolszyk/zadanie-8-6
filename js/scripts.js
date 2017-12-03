

var a = 1,
    b = 0,
    value = (a*a)-(2*a*b)+(b*b),
    wynik = value > 0 ? 'wynik dodatni' : 'wynik ujemny';
console.log('Result with number a: ' + a + ' and number b: ' + b + ' is equal to: '+ value);
console.log(wynik);



// inne rozwiązanie
var a = 1,
    b = 0,
    value = (a*a)-(2*a*b)+(b*b),
    wynik = value > 0,
    wynik2 = value == 0;

console.log('Result with number a: ' + a + ' and number b: ' + b + ' is equal to: '+ value);
if (wynik) {
  console.log('wynik dodatni')
} else if (wynik2) {
  console.log('wynik równy zero')
} else {
  console.log('wynik ujemny')
}
