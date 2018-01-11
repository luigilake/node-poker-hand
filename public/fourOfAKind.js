let calcFourOfAKind = (valueCount) => {
  let answer;
  let num;
  if(Object.values(valueCount).includes(4)){
    answer = true;
  }
  if(answer == true){
    num = Object.keys(valueCount)[Object.values(valueCount).indexOf(4)];
    switch(num){
      case '1':
        num = 'A';
        break;
      case '11':
        num = 'J';
        break;
      case '12':
        num = 'Q';
        break;
      case '13':
        num = 'K';
        break;
    }
    return(
      `FOUR OF A KIND, ${num}`
    )
  } else {
    return(false)
  }
}

export default calcFourOfAKind;
