function Node(value = null, left = null, right = null) {
    this.val = value
    this.left = left
    this.right = right
}

function BST(array = null) {
    this.buildTree = (array) => {
        if (array === null) return null;
        const sorted = [...new Set(array)].sort((a, b) => a - b);
        if (sorted.length === 0)
            return null;
        const mid = parseInt(sorted.length / 2);
        let rootNode = new Node(
            sorted[mid],
            this.buildTree(sorted.slice(0, mid)),
            this.buildTree(sorted.slice(mid + 1))
        );
        return rootNode;
    }

    this.root = this.buildTree(array);

    this.prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

    this.find = (value) => {
        if (this.root === null) return null;
        let current = this.root;
        while (current !== null && current.val !== value) {
            if (current.val < value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        if (current !== null)
            return current
        return null;
    }

    this.levelOrder = (callback = null) => {
        let res = [];
        if (!this.root) return res;
        let queue = [this.root];
        while (queue.length) {
            let level = [];
            let levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                if (callback) callback(node);
            }
            res.push(level);
        }
        return res;
    }

    this.inorder = (node = this.root, callback = null, res = []) => {
        if (!this.root) return [];
        if (!node) return;
        this.inorder(node.left, callback, res);
        if (callback) callback(node);
        res.push(node.val);
        this.inorder(node.right, callback, res);
        return res;
    }

    this.preorder = (node = this.root, callback = null, res = []) => {
        if (!this.root) return [];
        if (!node) return;
        if (callback) callback(node);
        res.push(node.val);
        this.preorder(node.left, callback, res);
        this.preorder(node.right, callback, res);
        return res;
    }

    this.postorder = (node = this.root, callback = null, res = []) => {
        if (!this.root) return [];
        if (!node) return;
        this.postorder(node.left, callback, res);
        this.postorder(node.right, callback, res);
        if (callback) callback(node);
        res.push(node.val);
        return res;
    }

    this.height = (node = this.root) => {
        if (!this.root) return 0;
        if (!node) return null;
        let res = 0;
        let queue = [[node, 0]];
        while (queue.length) {
            let levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const nodeAndHeight = queue.pop();
                const node = nodeAndHeight[0];
                const nodeHeight = nodeAndHeight[1];
                if (nodeHeight > res) res = nodeHeight;
                if (node.left) queue.push([node.left, nodeHeight+1]);
                if (node.right) queue.push([node.right, nodeHeight+1]);
            }
        }
        return res;
    }

    this.depth = (node, root=this.root, level = 0) => {
        if (!root) return 0;
        if (!node) return null;
        if (root.val === node.val) return level;
        let leftCount = this.depth(node, root.left, level + 1);
        if (leftCount !== 0) return leftCount;
        return this.depth(node, root.right, level + 1);
    }

    this.isBalanced = (node = this.root) => {
        if (node === null) return true;
        let heightDiff = Math.abs(this.height(node.left) - this.height(node.right));
        return (
            heightDiff <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        )
    }

    this.rebalance = () => {
        if (this.root === null) return;
        let array = this.inorder();
        this.root = this.buildTree(array);
    }

    this.insert = (value) => {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        let current = this.root;
        while (true) {
            if (current.val === value) return;
            else if (current.val > value) { 
                if (!current.left) {
                    current.left = new Node(value);
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new Node(value);
                    return;
                }
                current = current.right;
            }
        }
    }

    this.delete = (value)=> {
        this.root = this._removeNode(this.root, value);
    }

    this._removeNode = (node, value) => {
        if (!node) {
            return null;
        }

        if (value === node.val) {
            // Node with the value found, perform deletion
            if (!node.left && !node.right) {
                return null; // No children
            }

            if (!node.left) {
                return node.right; // Only right child
            }

            if (!node.right) {
                return node.left; // Only left child
            }

            // Node has both left and right children
            const minValue = this._findMinValue(node.right);
            node.val = minValue;
            node.right = this._removeNode(node.right, minValue);
            return node;
        } else if (value < node.val) {
            node.left = this._removeNode(node.left, value);
            return node;
        } else {
            node.right = this._removeNode(node.right, value);
            return node;
        }
    }

    this._findMinValue = (node) => {
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }
}

let tree = new BST([4, 2, 9, 1, 8, 3, 5, 6, 4, 1]);
tree.prettyPrint(tree.root);
console.log(tree.find(3));
console.log(tree.find(100));
console.log(tree.find(8));
console.log(tree.levelOrder());
console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.height());
console.log(tree.height(tree.find(3)));
console.log(tree.height(tree.find(2)));
console.log(tree.depth(tree.find(5)));
console.log(tree.depth(tree.find(3)));
console.log(tree.depth(tree.find(2)));
console.log(tree.depth(tree.find(8)));
console.log(tree.isBalanced());
tree.insert(20);
tree.insert(0);
tree.insert(10);
tree.prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint(tree.root);
tree.delete(0);
tree.prettyPrint(tree.root);
tree.delete(5);
tree.prettyPrint(tree.root);