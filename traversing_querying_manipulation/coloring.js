function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);
  
  if (!node1 || !node2) {
    return undefined;
  }

  // check that they are not children

  let node1Clone = node1.clone(true);
  let node2Clone = node2.clone(true);

  node1.parentNode.replaceChild(node2Clone, node1);
  node2.parentNode.replaceChild(node1Clone, node2);

  return true;
}

