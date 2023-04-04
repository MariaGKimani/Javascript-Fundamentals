//extract the last four characters from the string below
let x = "beautiful"
console.log(x.slice(-4))

//Insert the following string at the fourth index of the below variable:
"eat"
const food = "I was feeling hungry today"
const p = food.slice(0,5) + " eat"+ food.slice(5)
console.log(p)

//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
const story= "The quick brown fox jumps over the lazy dog"
console.log(story.match(/the/g).length)
console.log(story.match(/brown/g).length)

//Using JavaScript, find the following words from the following strings:
//1. "now"
const string1 = "We are now going to school";
console.log(string1.includes("now"))
//2. "sitting"
const string2 = "The child was sitting on the table before it fell"
console.log(string2.includes("sitting"))

//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "BEneath"
//3. Title case "A beautiful wedding"
let y = "wonderful"
console.log(y.toUpperCase())

let w = "amazing"
let v = "BEneath"
console.log(w.toLowerCase(),v.toLowerCase())

let z = "A beautiful wedding"
let l="A beautiful wedding";
l=l.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(l)