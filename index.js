const n1 =  {
  data: 100
}

const n2 = {
  data: 200
}

const n3 = {
  data: 300
}

//To have a reference of n2 from n1

n1.next= n2;
n2.next= n3;

console.log(n1);
console.log(n3);