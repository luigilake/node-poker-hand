let calcThreeOfAKind = (valueCount) => {
  if(Object.values(valueCount).includes(3) && !Object.values(valueCount).includes(2)){
    return(true);
  }
}

export default calcThreeOfAKind;
