const myURL = new URL(
  `http://wizard:password@apis.nambu.co.kr:8080/
    path1/path2?serviceKey=key&base_date=20231007&dataType=JSON&
    numberOfRows=10&pageNo=1&category=api&category=geo`
);
console.log("myURL: ", myURL);
// console.log("searchParams", myURL.searchParams);
// console.log("searchParams.getAll()", myURL.searchParams.getAll("category"));
// console.log("searchParams.get()", myURL.searchParams.get("category"));
// console.log("searchParams.get()", myURL.searchParams.get("numberOfRows"));
// console.log("searchParams.has()", myURL.searchParams.has("pageNo"));
// console.log("searchParams.keys()", myURL.searchParams.keys());
// console.log("searchParams.values()", myURL.searchParams.values());

// myURL.searchParams.append("fruit", "apple");
// myURL.searchParams.append("fruit", "banana");
// console.log(myURL.searchParams.getAll("fruit"));
// myURL.searchParams.set("fruit", "peach");
// console.log(myURL.searchParams.getAll("fruit"));
// myURL.searchParams.delete("fruit");
// console.log(myURL.searchParams.getAll("fruit"));
console.log(myURL.search);
console.log("searchParams.toString():", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
console.log(myURL.search);