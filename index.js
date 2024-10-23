const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay() - 1;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  monthEl.innerText = months[currentMonth];
  fullDateEl.innerText = new Date().toDateString();

  let days = "";

  for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && currentMonth === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  daysEl.innerHTML = days;
}

prevButton.addEventListener('click', () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  if (currentMonth === 11) currentYear--; // Go back a year
  renderCalendar();
});

nextButton.addEventListener('click', () => {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) currentYear++; // Go forward a year
  renderCalendar();
});

// Initial render
renderCalendar();
