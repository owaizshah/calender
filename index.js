const date = new Date();

const monthEl = document.querySelector(".month");
const heading = document.querySelector(".heading");
const dateEl = document.querySelector(".date-list");
const leftbtn = document.querySelector(".btn-left");
const rightbtn = document.querySelector(".btn-right");

const months = [
  "January",
  "Febuaray",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalender = function () {
  monthEl.innerHTML = months[date.getMonth()];
  heading.textContent = date.toDateString();

  //last date of month
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  //first day of month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  //last date of previos months
  const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  let dateli = "";

  const nextDays = 7 - lastDate.getDay() - 1;

  for (let i = firstDay; i >= 0; i--) {
    dateli += `<li class="non-active">${prevMonth - i}</li>`;
  }

  for (let i = 1; i <= lastDate.getDate(); i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      dateli += `<li class="active">${i}</li>`;
    } else {
      dateli += `<li>${i}</li>`;
    }
  }

  for (let i = 1; i <= nextDays; i++) {
    dateli += `<li class='non-active'>${i}</li>`;
  }

  document.querySelector("ul").innerHTML = dateli;
};

renderCalender();

leftbtn.addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

rightbtn.addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});
