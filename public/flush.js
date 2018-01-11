let calcFlush = (suitCount) => {
  if(Object.keys(suitCount).length === 1 && Object.values(suitCount)[0] == 5){
    return('FLUSH');
  } else {
    return(false)
  }
}

export default calcFlush;
