class Node {
  constructor(cars) {
    this.cars = cars;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

//Add an element at the end of the list

add( cars ) {
  var car1 = new Node(cars);

  var current;

  //if the list is empty, add the element and mak it head

  if(this.head == null) {
    this.head = car1;
  } else {
    current = this.head;

    //Iterate to the end of the list
  }
};