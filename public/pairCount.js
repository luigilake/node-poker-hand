let pairCount = (valueCount) => {
  let count = 0
  Object.values(valueCount).forEach(value => {
    if(value == 2){ count += 1 };
  });
  return(count)
}

export default pairCount;
