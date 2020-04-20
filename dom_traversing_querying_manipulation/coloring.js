function colorGeneration(generationNumber) {
  if (generationNumber < 1) {
    return;
  }

  let nodes = Array.from(document.body.children);
  let currentLevel = 1;

  while (currentLevel < generationNumber) {
    nodes = nodes.flatMap(node => Array.from(node.children));
    currentLevel += 1;
  }

  nodes.forEach(node => node.classList.add('generation-color'));
} 