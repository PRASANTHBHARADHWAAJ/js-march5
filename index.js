//FIBONACCI SERIES

let a = 1
let b = 1
console.log(a)
console.log(b)
// let n = prompt("Enter value");
// for(i=0;i<n;i++)
// {
//   a=a+b;
//   b=a-b;
//   console.log(a);
// }


//PALINDROME NUMBER

// let palstring =prompt("Enter string");
let f=0;
let length1 = palstring.length;
let k= palstring.length;
for(i=0;i<=length1/2;i++)
{
  if(palstring[i] != palstring[k-1])
  {
    f=1;
    break;
  }
  k-=1;
}
(f==1) ? console.log("not palindrome"): console.log("Palindrome");
