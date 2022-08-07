/**
 * @ts-check
 */

const date = new Date();
const conteudo = document.querySelector("#content");
conteudo.innerHTML = formatDate();

function formatDate() {
  const weekDay = date.getDay();
  const weekDayText = nameDay(weekDay);

  const month = date.getMonth();
  const nameMonthText = nameMonth(month);

  return `${weekDayText}, ${zeroLeft(
    date.getDate()
  )} de ${nameMonthText} de ${zeroLeft(date.getFullYear())} ${zeroLeft(
    date.getHours()
  )}:${zeroLeft(date.getMinutes())}`;
}

function zeroLeft(value) {
  const zero = value >= 10 ? value : `0${value}`;
  return zero;
}
function nameMonth(value) {
  const monthName = [
    "Janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outobro",
    "novembro",
    "dezembro",
  ];
  return monthName[value];
}

function nameDay(day) {
  const nameDay = [
    "Domingo",
    "Segunda-Feira,",
    "Terça-Feira,",
    "Quarta-Feira,",
    "Quinta-Feira,",
    "Sexta-Feira,",
    "Sábado,",
  ];
  return nameDay[day];
}
