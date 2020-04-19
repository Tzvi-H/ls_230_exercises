function domTreeTracer(id, tree=[]) {
  let node = document.getElementById(id);
  if (!node) {
    return tree;
  } else {
    return domTreeTracer(node.parentNode.id, tree.concat(siblings(node)));
  }
}

function siblings(node) {
  return [Array.from(node.parentNode.children, child => child.nodeName)];
}