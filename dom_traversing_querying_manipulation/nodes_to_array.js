function nodesToArray() {
  return walk(document.body);

  function walk(node) {
    let result = [node.nodeName, []];
    if (node.children.length !== 0) {
      for (let i = 0; i < node.children.length; i += 1) {
        result[1].push(walk(node.children[i]));
      }
    }
    return result;
  }
}
