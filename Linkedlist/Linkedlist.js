function Node(value = null, next = null) {
    this.val = value
    this.next = next
}

function Linkedlist() {
    this.head = null;
    this.length = 0;

    this.append = function (value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };

    this.prepend = function (value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    };

    this.tail = function () {
        if (!this.head)
            return null;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    };

    this.at = function (index) {
        if (index < 0 || index >= this.length)
            return null;
        let i = 0;
        let current = this.head;
        while (i !== index) {
            current = current.next;
            i++;
        }
        return current;
    };

    this.contains = function (value) {
        let current = this.head;
        while (current !== null) {
            if (current.val === value)
                return true;
            current = current.next;
        }
        return false;
    };

    this.find = function (value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.val === value)
                return index;
            current = current.next;
            index++;
        }
        return -1;
    };

    this.toString = function () {
        let res = "";
        let current = this.head;
        while (current !== null) {
            res += `(${current.val}) -> `;
            current = current.next;
        }
        res += "null";
        return res;
    };
}

const list = new Linkedlist();
list.append(8);
list.append(5);
list.append(0);
list.prepend(9);
list.prepend(3);
console.log(list.toString());
console.log(list.tail().val);
console.log(list.at(0).val);
console.log(list.at(4).val);
console.log(list.contains(7));
console.log(list.contains(0));
console.log(list.find(0));
console.log(list.find(10));
