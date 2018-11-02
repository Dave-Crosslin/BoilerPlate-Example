var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');

var n1 = new Node(5);
var n2 = new Node(7);
var n3 = new Node(2);
var n4 = new Node(13);
var n5 = new Node(1);
var n6 = new Node(27);
var n7 = new Node(3, null);
//second head, two intersecting lists
var n1b = new Node(2);
n1b.next = n3;

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

var listA = new LinkedList(n1);
var listB = new LinkedList(n1b);

function listsIntersect(listA, listB){
  if (listA == null || listB == null){
    return null;
  }
  listA.tail = listA.getTail;
  listB.tail = listB.getTail;
  listA.length = listA.getLength;
  listB.length = listB.getLength;

  if(listA.tail != listB.tail){
    return null;
  }
let shorter = listA.length < listB.length? listA : listB;
let longer = listB.length < listA.length? listB : listA;

let count = longer.getLength - shorter.getLength;


while(count != 0){
  longer.head = longer.head.next;
  count--;
}
  while (shorter.head != longer.head){
    shorter.head = shorter.head.next;
    longer.head = longer.head.next;
  }
  return shorter.head
}

let result = listsIntersect(listA, listB);
console.log(result);
