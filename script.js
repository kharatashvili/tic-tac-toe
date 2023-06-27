function printField(fieldElementRef, field) {
  let htmlFieldString = "";

  for (let i = 0; i < field.length; i++) {
    htmlFieldString += '<div class="row">';
    for (let j = 0; j < field.length; j++) {
      htmlFieldString += `<div class="cell cell-${i}-${j}" data-i="${i}" data-j="${j}"></div>`;
    }
    htmlFieldString += "</div>";
  }

  fieldElementRef.innerHTML = htmlFieldString;
}

function getCellElementRef(i, j) {
  return document.querySelector(`.cell-${i}-${j}`);
}

function onFieldClick(event, field) {
  const targetElement = event.target;
  const i = targetElement.dataset.i;
  const j = targetElement.dataset.j;

  if (isFilledCell(field, i, j)) {
    return;
  }

  field[i][j] = isZeroPlayerStep(field) ? "X" : "O";
  getCellElementRef(i, j).innerHTML = field[i][j];
  checkWinner();
}

function isZeroPlayerStep(field) {
  let countFilledCells = 0;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j] !== undefined) {
        countFilledCells++;
      }
    }
  }

  return countFilledCells % 2 === 0;
}

function isFilledCell(field, i, j) {
  return field[i][j] !== undefined;
}

function subscribeToUserActions(fieldElementRef, field) {
  fieldElementRef.addEventListener("click", function (event) {
    onFieldClick(event, field);
  });
}

function main() {
  const fieldSize = 3;
  const fieldElementRef = document.querySelector(".field");
  const field = [
    new Array(fieldSize),
    new Array(fieldSize),
    new Array(fieldSize),
  ];

  printField(fieldElementRef, field);
  subscribeToUserActions(fieldElementRef, field);
}

main();

function winnerX() {
  alert('Победил "X"');
}

function winnerO() {
  alert('Победил "O"');
}

function checkWinner() {
  let allblock = document.getElementsByClassName("cell");
  if (
    allblock[0].innerHTML == "X" &&
    allblock[1].innerHTML == "X" &&
    allblock[2].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[3].innerHTML == "X" &&
    allblock[4].innerHTML == "X" &&
    allblock[5].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[6].innerHTML == "X" &&
    allblock[7].innerHTML == "X" &&
    allblock[8].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[0].innerHTML == "X" &&
    allblock[3].innerHTML == "X" &&
    allblock[6].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[1].innerHTML == "X" &&
    allblock[4].innerHTML == "X" &&
    allblock[7].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[2].innerHTML == "X" &&
    allblock[5].innerHTML == "X" &&
    allblock[8].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[0].innerHTML == "X" &&
    allblock[4].innerHTML == "X" &&
    allblock[8].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[2].innerHTML == "X" &&
    allblock[4].innerHTML == "X" &&
    allblock[6].innerHTML == "X"
  ) {
    alert("победили крестики");
  }
  if (
    allblock[0].innerHTML == "0" &&
    allblock[1].innerHTML == "0" &&
    allblock[2].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[3].innerHTML == "0" &&
    allblock[4].innerHTML == "0" &&
    allblock[5].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[6].innerHTML == "0" &&
    allblock[7].innerHTML == "0" &&
    allblock[8].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[0].innerHTML == "0" &&
    allblock[3].innerHTML == "0" &&
    allblock[6].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[1].innerHTML == "0" &&
    allblock[4].innerHTML == "0" &&
    allblock[7].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[2].innerHTML == "0" &&
    allblock[5].innerHTML == "0" &&
    allblock[8].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[0].innerHTML == "0" &&
    allblock[4].innerHTML == "0" &&
    allblock[8].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
  if (
    allblock[2].innerHTML == "0" &&
    allblock[4].innerHTML == "0" &&
    allblock[6].innerHTML == "0"
  ) {
    alert("победили нолики");
  }
}
