addOutput("Module 2 loaded")

export function render() {
  addOutput("Module 2 render() was called")
}

function addOutput(text) {
  const el = document.createElement("li")
  el.innerHTML = text
  document.getElementById("output").appendChild(el)
}
