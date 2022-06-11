class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node (100);
//console.log(n1); // Try to run Node file name

class LinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  // Insert head
  insertFirst (data) {
    this.head = new Node(data, this.head);
  }


  //Insert Tail


  //Insert at index

  //Get at index

  //Remove at index


  //Clear List

  
  //Print List
}