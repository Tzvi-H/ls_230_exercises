function walk(node, callback) {
  callback(node);
  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function childNodes(id) {
  let parent = document.getElementById(id);
  let children = parent.childNodes.length;
  let grandchildren = 0;

  walk(parent, node => {
    if (node !== parent && node.parentNode !== parent) {
      grandchildren += 1;
    }
  })

  console.log([children, grandchildren])
}

childNodes(1);
childNodes(4);
childNodes(9);
