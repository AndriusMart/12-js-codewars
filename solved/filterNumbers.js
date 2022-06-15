//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
    let numbersOnly = (val) => {
        if  ( val === 0){
            return !val;
        }else if ( typeof(val) == 'number' ){
            return val;
        }
    }
    let numbers = l.filter(numbersOnly);
    return numbers;
  }