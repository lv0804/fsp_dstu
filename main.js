// Пример данных матчей
const matches = [
    { date: '2024-11-01', teams: 'Team A vs Team B', time: '18:00' },
    { date: '2024-11-02', teams: 'Team C vs Team D', time: '20:00' },
    { date: '2024-11-03', teams: 'Team E vs Team F', time: '17:00' },
    // Добавьте дополнительные матчи, если необходимо
];

// Функция для отображения списка матчей
function displayMatches() {
    const matchList = document.getElementById('matchList');
    matchList.innerHTML = ''; // Очищаем список перед добавлением новых данных

    matches.forEach(match => {
        const matchItem = document.createElement('div');
        matchItem.classList.add('match-item');

        matchItem.innerHTML = `
            <h3>${match.teams}</h3>
            <p class="date">${match.date} — ${match.time}</p>
        `;

        matchList.appendChild(matchItem);
    });
}

// Вызов функции для отображения матчей при загрузке страницы
document.addEventListener('DOMContentLoaded', displayMatches);
////
document.addEventListener("DOMContentLoaded", function () {
    const openCalendarBtn = document.getElementById("openCalendarBtn");
    const calendarPopup = document.getElementById("calendarPopup");
    const calendarGrid = document.getElementById("calendarGrid");
    const calendarMonth = document.getElementById("calendarMonth");

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function openCalendar() {
        calendarPopup.style.display = "block";
        populateCalendar(currentYear, currentMonth);
    }

    function closeCalendar(e) {
        if (!calendarPopup.contains(e.target) && e.target !== openCalendarBtn) {
            calendarPopup.style.display = "none";
        }
    }

    function populateCalendar(year, month) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        calendarGrid.innerHTML = "";
        calendarMonth.innerText = `${year}-${month + 1}`;

        for (let i = 0; i < firstDay; i++) {
            calendarGrid.innerHTML += "<div></div>";
        }
        for (let i = 1; i <= daysInMonth; i++) {
            calendarGrid.innerHTML += `<div>${i}</div>`;
        }
    }

    openCalendarBtn.addEventListener("click", openCalendar);
    document.addEventListener("click", closeCalendar);
});
