let pairCount = (valueCount) => {
  let values = []
  let valuesArray = Object.values(valueCount)
  for(let i = 0; i < valuesArray.length; i++){
    if(valuesArray[i] == 2){
      values.push(Object.keys(valueCount)[i]);
    }
  }
  values.sort((a,b) => {a - b}).reverse()
  if(values.length == 2){
    let num1 = values[0]
    let num2 = values[1]
    switch(num1){
      case '1':
        num1 = 'A';
        break;
      case '11':
        num1 = 'J';
        break;
      case '12':
        num1 = 'Q';
        break;
      case '13':
        num1 = 'K';
        break;
    }
    switch(num2){
      case '1':
        num2 = 'A';
        break;
      case '11':
        num2 = 'J';
        break;
      case '12':
        num2 = 'Q';
        break;
      case '13':
        num2 = 'K';
        break;
    }
    return(`TWO PAIR, ${num1}S AND ${num2}S`)
  } else if (values.length == 1){
    let num1 = values[0]
    switch(num1){
      case '1':
        num1 = 'A';
        break;
      case '11':
        num1 = 'J';
        break;
      case '12':
        num1 = 'Q';
        break;
      case '13':
        num1 = 'K';
        break;
    }
    return(`ONE PAIR, ${num1}S`)
  } else {
    return(false)
  }
}

export default pairCount;
