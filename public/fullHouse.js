let calcFullHouse = (valueCount) => {
  if(Object.values(valueCount).includes(3) && Object.values(valueCount).includes(2)){
    let nums = [Object.keys(valueCount)[Object.values(valueCount).indexOf(3)], Object.keys(valueCount)[Object.values(valueCount).indexOf(2)]];

    let values = nums.map(num => {
      switch(num){
        case '1':
          return('A');
          break;
        case '11':
          return('J'); 
          break;
        case '12':
          return('Q');
          break;
        case '13':
          return('K');
          break;
        default:
          return(num)
      }
    })
    return(`FULL HOUSE, ${values[0]}S OVER ${values[1]}S`);
  } else {
    return(false)
  }
}

export default calcFullHouse;
