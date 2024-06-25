function existsInArr(arr, item) {
  //physical file is not updated, so, this method would always return false
  try {
    return arr.findIndex((item) => item.name === item.name) > 0;
  } catch (error) {
    return error.desc;
  }
}
function getProdById(prods, id) {
  return prods.find((prod) => prod.id == id);
}
module.exports.getProdById = getProdById;
module.exports.IsExist = existsInArr;
