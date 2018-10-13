class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head){
this.head = head;
  }

  print(){
    let node = this.head;
    while(node !== null){
      console.log(node.data);
      node = node.next;
    }
  }
  insertNode(new_node, x){
    let node = this.head;
    let previous;
    let isTail = true;

    while(node !== null){
      let current = node;
      if(current.data > x && previous !== undefined){
        new_node.next = previous.next;
        previous.next = new_node;
        isTail = false;
        break;
      }
      if(current.data > x && previous === undefined){
        new_node.next = current;
        this.head = new_node;
        isTail = false;
        break;
      }
      previous = current;
      node = node.next;
    }
    if(isTail === true){
    previous.next = new_node;
    }
  }
}

var n1 = new Node(5);
var n2 = new Node(7);
var n3 = new Node(2);
var n4 = new Node(13);
var n5 = new Node(1);
var n6 = new Node(27);
var n7 = new Node(3, null);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;


function partitionList(node, x){
  let head = node;
  let tail = node;

  while (node != null){
    let next = node.next;
    if (node.data < x){
    node.next = head;
    head = node;
  }
  else{
    tail.next = node;
    tail = node;
  }
    node = next;
  }
  tail.next = null;
  var list = new LinkedList(head);
  return list;
}


var n8 = new Node(17, null);
var myList = new LinkedList(n1);
myList.insertNode(n8, 16);
myList.print();
