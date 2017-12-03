

var a = 1,
    b = 0,
    value = (a*a)-(2*a*b)+(b*b),
    wynik = value > 0 ? 'wynik dodatni' : 'wynik ujemny';
console.log('Result with number a: ' + a + ' and number b: ' + b + ' is equal to: '+ value);
console.log(wynik);

(wynik) ? code_if_condition_is_true : code_if_condition_is_false


var a = 1,
    b = 0,
    value = (a*a)-(2*a*b)+(b*b),
    wynik = value > 0,

console.log('Result with number a: ' + a + ' and number b: ' + b + ' is equal to: '+ value);
if (wynik) {
  console.log('wynik dodatni')
} else {
  console.log('wynis wynik ujemny')
}
