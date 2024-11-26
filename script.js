const grid = document.getElementById("grid");
const output = document.getElementById("output");

grid.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("grid-item")) {
    const row = event.target.dataset.row;
    const column = event.target.dataset.column;
    let color = getRandomColor();
    event.target.style.backgroundColor = color;
    output.textContent = `You have clicked on the item on the ROW :   ${row} and COLUMN :  ${column} `;
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // 0 to 15
  }
  console.log(color);
  return color;
}
