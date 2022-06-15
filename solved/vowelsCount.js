//  https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    const arr = str.split("");
    let vowelsOnly = (vow) =>{
        if (vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u'){
            return vow;
        }
    }
    let letters = arr.filter(vowelsOnly);
    return letters.length;
  }