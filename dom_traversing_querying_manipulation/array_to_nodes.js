function arrayToNodes(array) {
  let node = document.createElement(array[0]);
  let children = array[1];

  if (children.length > 0) {
    for (let i = 0; i < children.length; i += 1) {
      node.appendChild(arrayToNodes(children[i]));
    }
  }
  
  return node;
}