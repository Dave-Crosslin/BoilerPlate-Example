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
    let previous = this.head;

    while(node !== null){
      let current = node;
      if(current.data > x){
        new_node.next = previous.next;
        previous.next = new_node;
        return;
      }
      previous = current;
      node = node.next;
    }
    previous.next = new_node;
  }

  //CTCI
partitionList(node, x){
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
  getLength(){
    let result = 0;
    let node = this.head;

    while(node != null){
      result ++;
      node = node.next;
    }
    return result;
  }
    getTail(){
      let result;
      let node = this.head;

      while(node != null){
        if(node.next === null){
          result = node;
        }
        node = node.next;
    }
    return result;
  }
}
module.exports = LinkedList;
