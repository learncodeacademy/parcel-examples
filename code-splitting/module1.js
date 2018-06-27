function addOutput(text) {
  const el = document.createElement("li")
  el.innerHTML = text
  document.getElementById("output").appendChild(el)
}


addOutput("Module 1 loaded")

document.getElementById("button").addEventListener("click", () => {
  addOutput("Loading Module 2")
  import("./module2").then(({ render }) => {
    render()
  })
})
