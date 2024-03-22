const btnElem = document.getElementById("calculate");
const birthdayElem = document.getElementById("birthday")
const resultElem = document.getElementById("result");
const result2Elem = document.getElementById("result2");


function calculateAge() {
  // @ts-ignore
  const birthdayValue = birthdayElem.value;
  const age = getAge(birthdayValue);
  resultElem.innerText = `Your age: ${age} years old`;
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnElem.addEventListener("click", calculateAge)

