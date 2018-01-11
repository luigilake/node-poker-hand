let calcStraight = (valueCount) => {
  let straight = true;
  let values = Object.keys(valueCount).map( value => parseInt(value))
  values.sort((a, b) => { a - b }).reverse();
  for(let i = 0; i < values.length - 1; i++){
    if(values[i] - values[i + 1] != 1 || values.length != 5){
      straight = false;
    }
  }
  return(straight)
}

export default calcStraight;
