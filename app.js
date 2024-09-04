function createMultiplicationTable() {
  let table = document.createElement("table");

  for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
      let td = document.createElement("td");

      td.textContent = i * j;

      row.appendChild(td);
    }

    table.appendChild(row);
  }

  document.getElementById("table-container").appendChild(table);
}

createMultiplicationTable();
