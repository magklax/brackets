module.exports = function check(str, bracketsConfig) {
  const holderArr = [];
  const openedBrackets = [];
  const closedBrackets = [];
  const sameBrackets = [];
  let flag = false;

  bracketsConfig.forEach(function(elem) {
    if (elem[0] === elem[1]) {
      sameBrackets.push(elem[0]);
    } else {
      openedBrackets.push(elem[0]);
      closedBrackets.push(elem[1]);
    }
  })

  for (let i = 0; i < str.length; i++) {
    if (openedBrackets.includes(str[i])){
      holderArr.push(str[i]);
    } else if (closedBrackets.includes(str[i])) {
      const openedBracket = openedBrackets[closedBrackets.indexOf(str[i])];
      if (holderArr[holderArr.length - 1] === openedBracket){
        holderArr.splice(-1,1);
      } else {
        holderArr.push(str[i]);
        break;
      }
    } else if (sameBrackets.includes(str[i])) {
      if (holderArr[holderArr.length - 1] === str[i]) {
        holderArr.splice(-1,1);
      } else if (holderArr[holderArr.length - 1] != str[i] && !flag) {
        holderArr.push(str[i]);
        flag = true;
      } else {
        holderArr.push(str[i]);
      }
    }
  }
  return holderArr.length === 0;
}
