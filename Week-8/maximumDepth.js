class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    this.noOfBranches = 0;
  }

  addNode(data) {
    const node = new Node(data);
    if (this.root == null) {
      this.root = node;
      return;
    }
    try {
      this.#appendNodeToBst(this.root, node);
    } catch (e) {
      console.log(e);
    }
  }
  #appendNodeToBst(node, newNode) {
    if (newNode.data > node.data) {
      if (node.right == null) {
        this.noOfBranches++;
        node.right = newNode;
      } else {
        this.#appendNodeToBst(node.right, newNode);
      }
    } else if (newNode.data < node.data) {
      if (node.left == null) {
        this.noOfBranches++;
        node.left = newNode;
      } else {
        this.#appendNodeToBst(node.left, newNode);
      }
    } else {
      throw `The input data ${newNode.data} either present already or invalid data`;
    }
  }
  depthOfTree() {
    let firstNode = this.root;
    return this.#depthOfTreeHandler(firstNode);
  }
  #depthOfTreeHandler(node) {
    if (node == null) return 0;
    if (node.right == null && node.left == null) {
      return 0;
    } else {
      let l = this.#depthOfTreeHandler(node.left);
      let r = this.#depthOfTreeHandler(node.right);
      return 1 + (l > r ? l : r);
    }
  }
}

const binaryTreeObject = new binarySearchTree();
binaryTreeObject.addNode(1);
binaryTreeObject.addNode(2);
binaryTreeObject.addNode(3);
binaryTreeObject.addNode(8);
binaryTreeObject.addNode(5);
binaryTreeObject.addNode(6);
binaryTreeObject.addNode(4);
binaryTreeObject.addNode(9);
binaryTreeObject.addNode(7);
binaryTreeObject.addNode(10);
binaryTreeObject.addNode(15);
binaryTreeObject.addNode(12);

console.log(binaryTreeObject.depthOfTree());
