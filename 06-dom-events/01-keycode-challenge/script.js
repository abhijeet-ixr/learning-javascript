window.addEventListener("keydown", (e) => {
  // form object with the key event and relevant values
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  // get the parent target element
  const insertDiv = document.querySelector("#insert");
  insertDiv.innerHTML = "";

  // as all have same HTML - create HTML for each block and add them to parent div
  for (const item in keyCodes) {
    const keyDiv = document.createElement("div");
    keyDiv.className = "key";

    const labelText = document.createTextNode(item);
    const valueText = document.createTextNode(keyCodes[item]);

    const small = document.createElement("small");

    small.appendChild(labelText);
    keyDiv.appendChild(valueText);
    keyDiv.appendChild(small);
    insertDiv.appendChild(keyDiv);
  }
});
