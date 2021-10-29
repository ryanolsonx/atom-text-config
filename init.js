atom.commands.add("atom-text-editor", "editor:sort-lines", () => {
  var te = atom.workspace.getActiveTextEditor();
  var br = te.getSelectedBufferRange();
  var sorted = te.getSelectedText().split("\n").sort().join("\n");

  te.setTextInBufferRange(br, sorted);
});
