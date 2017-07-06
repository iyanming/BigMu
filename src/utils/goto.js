import { browserHistory } from 'dva/router'

export default (path) => {
  if (path) {
    browserHistory.push(path)
  } else {
    throw new Error('Path cannot be null!')
  }
}
