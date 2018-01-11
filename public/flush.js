let calcFlush = (suitCount) => {
  if(Object.keys(suitCount).length === 1){
    return('FLUSH');
  } else {
    return(false)
  }
}

export default calcFlush;
