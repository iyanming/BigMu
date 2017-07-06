/**
 * Created by out_xu on 17/7/7.
 */
/**
 * 数组内查询
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(_ => _[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}

const withInArray = (array, item) => {
  if (!(array instanceof Array)) {
    return false
  }
  return array.indexOf(item) > -1
}

export { queryArray, withInArray }