const x=3
if (typeof x === "number" ){
  console.log ('x-Число')
}else if (typeof x === "boolean"){
  console.log ('x-Логический тип')
}else if (typeof x === "string"){
  console.log ('x-Строчный тип')
}else {
   console.log("Тип x не определён")
}