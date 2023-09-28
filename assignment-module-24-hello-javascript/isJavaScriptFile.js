/* 
// 2. check whether the given file name is a javaScript file or not

isJavaScriptFile;
 */
function isJavaScriptFile(format) {
  const result = format.endsWith(".js");
  return result;
}

const whiceFormat = isJavaScriptFile(".js");
console.log(whiceFormat);
