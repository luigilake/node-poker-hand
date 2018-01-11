let calcStraight = (valueCount) => {
  let straight = true;
  let values = Object.keys(valueCount).map( value => parseInt(value))
  let royal;
  values.sort((a, b) => { b - a }).reverse();

  // calculate for high-ace straight
  if(values[0] == 13 && values[4] == 1){
    values.pop();
    values.unshift(14);
    royal = true;
  }

  for(let i = 0; i < values.length - 1; i++){
    if(values[i] - values[i + 1] != 1 || values.length != 5){
      straight = false;
    }
  }

  let num = values[0]
  switch(num){
    case 1:
      num = 'A';
      break;
    case 11:
      num = 'J';
      break;
    case 12:
      num = 'Q';
      break;
    case 13:
      num = 'K';
      break;
    default:
      num = values[0];
  }

  if(values.length == 5){
    if(royal && straight){
      return('ACE-HIGH STRAIGHT')
    } else if (!royal && straight){
      return(`${num}-HIGH STRAIGHT`)
    } else {
      return(false)
    }
  } else {
    return(false)
  }
}

export default calcStraight;
