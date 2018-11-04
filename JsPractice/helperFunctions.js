class Extension{
  constructor(){

  }
  getIntersectingNode(listA, listB){
    if (listA == null || listB == null){
      return null;
    }
    listA.tail = listA.getTail();
    listB.tail = listB.getTail();
    listA.length = listA.getLength();
    listB.length = listB.getLength();

    if(listA.tail != listB.tail){
      return null;
    }

  let shorter = listA.length < listB.length? listA : listB;
  let longer = listB.length > listA.length? listB : listA;
  let count = longer.getLength() - shorter.getLength();

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
}

module.exports = Extension;
