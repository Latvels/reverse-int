module.exports = function reverse (n) {
    let arr = parseInt(
        n.toString()
        .split("")
        .reverse()
        .join(""))
      return arr
}
