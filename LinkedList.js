// LinkedList = {
//     head: Node{
//         value: 'A',
//         nextNode: Node{
//             value: 'B',
//             nextNode: Node{
//                 value: 'C',
//                 nextNode: null
//             }
//     }
// }

const Node = (input) => {
    return{
        value: input || null,
        nextNode: null
    }
}

const LinkedList = () => {
    let firstNode = null;
    
    // 1
    const append = (value) => {
        const newNode = Node(value);
        if(!firstNode){
            firstNode = newNode;
        }else{
            tail().nextNode = newNode;
        }
    }

    // 2
    const prepend = (value) => {
        const newNode = Node(value);
        if(!firstNode){
            firstNode = newNode;
        }else{
            newNode.nextNode = firstNode;
            firstNode = newNode;
        }
    }

    // 3
    const size = () => {
        let pointer = firstNode;
        let size;
        if(pointer){
            size = 1;
            while(pointer.nextNode !== null){
                pointer = pointer.nextNode;
                size++;
            }
        }else{
            size = 0;
        }

        return size;
    }

    // 4
    const head = () => {
        return firstNode;
    }

    // 5
    const tail = () => {
        let pointer = firstNode;
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    // 6
    const at = (index) => {
        let pointer = firstNode;
        for(let i=0; i<index; i++){
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    // 7
    const pop = () => {
        let pointer = firstNode;
        let lastNode = tail();
        while(pointer.nextNode !== lastNode){
            pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
        console.log(firstNode);
    }

    // 8
    const contains = (value) => {
        let pointer = firstNode;
        while(pointer.nextNode !== null){
            if(pointer.value == value) return true;
            pointer = pointer.nextNode;
        }
        if(pointer.value == value) return true;
        return false;
    }

    // 9
    const find = (value) => {
        let index;
        let pointer = firstNode;
        if(contains(value)){
            index = 0;
            while(pointer.value !== value){
                pointer = pointer.nextNode;
                index++;
            }
            return index;
        }else{
            return false;
        }
        
    }

    // 10
    const toString = () => {
        let string='';
        let pointer = firstNode;
        while(pointer.nextNode !== null){
            string+=`(${pointer.value})->`;
            pointer = pointer.nextNode;
        }
        string+=`(${pointer.value})->null`;
        return string;
    }

    //EC 1
    const insertAt = (value, index) => {
        let pointer = firstNode;
        let count = 1; // or index - 1
        while(count !== index){
            pointer = pointer.nextNode;
            count++;
        }
        let nextElement = pointer.nextNode;
        pointer.nextNode = Node(value);
        pointer.nextNode.nextNode = nextElement;
    }

    //EC 2
    const removeAt = (index) => {
        let pointer = firstNode;
        let count = 0;
        while(count !== (index-1)){
            pointer = pointer.nextNode;
            count++;
        }
        pointer.nextNode = pointer.nextNode.nextNode;
    }

    return{append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt}
}

// Test Script
const list = LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.insertAt(3, 1);
list.removeAt(4);
console.log(list.toString());