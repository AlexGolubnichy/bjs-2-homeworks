'use strict';
function solveEquation(a, b, c) {
 
  // код для задачи №1 писать здесь
      let arr = {};
      let D = Math.sqrt(b) - 4 * a * c;
      console.log( 'D = ' + D );
      if( D < 0 ) 
        return false;
      arr['discriminant'] = D;
      if( D == 0 ) 
        arr["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
      else if( D > 0 ) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        arr["quadratic roots"]
    }
    
  return arr; // array
}
'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
