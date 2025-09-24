const list = document.getElementById("infi-list");
let itemCount = 1;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

addItems(10);


list.addEventListener("scroll", () => {

  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); 
  }
});
