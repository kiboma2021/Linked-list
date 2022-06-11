class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  addElement(data) {
    var ll = new Node (data);
    
    var current;

    if(this.head==null){
      this.head = data;
    } else {
      current = this.head;
    }
  }
}