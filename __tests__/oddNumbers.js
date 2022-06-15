//  https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
function oddCount(n){
    let number = n;
    let numbers =[];
    for (let i = 1; number > i; i++){
        let num = i;
      if (num % 2 !==0){
        numbers.push(i++);
      }
    }
    return numbers.length + ' (because odd numbers below ' + number + ' are ' + numbers + ')' ;
    }
    console.log(oddCount(15));