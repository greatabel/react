export default {
  getName () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('test jspath!')
      }, 3000)
    })
  }
}