function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length; ++i) {
    if (i == stopValue - 1) {
      break
    }
    array[i] = changeValue
  }
  return array
}
