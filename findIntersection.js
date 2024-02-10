function FindIntersection(strArr) {
  // code goes here

  const str1 = strArr[0];
  const str2 = strArr[1];
  const cleaned1 = str1.split(", ");
  const cleaned2 = str2.split(", ");

  const result = cleaned1
    .filter((value) => cleaned2.includes(value))
    .join(", ")
    .toString();

  if (!result) {
    console.log("no values intersect");
  }
  //console.log("result",result.join(",").toString())
  return result;
}
//Test cases
let arr = ["2, 1, 456, 4, 75765", "3, 345, 3, 2, 456, 4"];
let arr2 = ["56, 34, 2", "34, 25, 56, 7"];
let arr3 = ["1, 2, 54", "23, 89, 3"];
console.log(FindIntersection(arr));
console.log(FindIntersection(arr2));
console.log(FindIntersection(arr3));
