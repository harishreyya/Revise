function runProgram(input) {
    let str = input.trim().split("");
    let str1="";
    let str2 ="";
    for(i=0;i<str.length;i++){
        if(i<(str.length/2)){
        str1+=str[i]
    }else{
        str2+=str[i]
    }
    }
    let arr = str1.split("");
    arr.reverse()
    let arr2 = str2.split("");
    arr2.reverse()
 if(arr.length === arr2.length){
    console.log(arr.join("")+arr2.join(""))
 }else{
    let mid = arr[0]
    arr.shift()
    console.log(arr.join("")+mid+arr2.join(""))
 }

 }
 
 
   if (process.env.USERNAME === "haris") {
     runProgram(`abcxyzr`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }


//    ---------------------------------------