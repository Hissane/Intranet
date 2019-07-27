const events = [
  {
    title: "Event 1",
    start: "2019-07-09T00:00:00",
    allDay: true
  },
  {
    title: "Event 2",
    start: "2019-07-15T00:00:00",
    allDay: true
  },
  {
    title: "Event 3",
    start: "2019-07-29T00:00:00",
    allDay: true
  }
];

$(window).on("load", () => {
  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    defaultView: "dayGridMonth",
    header: {
      center: "addEventButton"
    },
    customButtons: {
      addEventButton: {
        text: "add event",
        click: function() {
          var dateStr = prompt("Enter a date in YYYY-MM-DD format");
          var titleevent = prompt("Enter event title");
          var date = new Date(dateStr + "T00:00:00");

          if (!isNaN(date.valueOf())) {
            calendar.addEvent({
              title: titleevent,
              start: date,
              allDay: true
            });
            alert("Great. Now, update your database...");
          } else {
            alert("Invalid date.");
          }
        }
      }
    }
  });

  events.forEach(event => calendar.addEvent(event));

  calendar.render();
});
