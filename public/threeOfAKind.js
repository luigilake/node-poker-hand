let calcThreeOfAKind = (valueCount) => {

  if(Object.values(valueCount).includes(3) && !Object.values(valueCount).includes(2)){
    let num = Object.keys(valueCount)[Object.values(valueCount).indexOf(3)];
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
      `THREE OF A KIND, ${num}S`
    )
  } else {
    return(false)
  }

}

export default calcThreeOfAKind;
