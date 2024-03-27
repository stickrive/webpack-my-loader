module.exports = function (source) {
  console.log("========", source)
  return source.replace("公司A", "我的公司")
}
