function addZero(num) {
  return num < 10 ? "0" + num : num;
}

function updateClock() {
  const now = new Date();

  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  const day = addZero(now.getDate());
  const month = addZero(now.getMonth() + 1);
  const year = now.getFullYear();

  const clockEl = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  if (clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  if (dateEl) dateEl.textContent = `${day}/${month}/${year}`;

  const messageEl = document.getElementById("mensaje-hora") || document.getElementById("message");
  if (messageEl) {
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    let mensaje = "";

    if (totalMinutes >= 1 && totalMinutes <= 420) {
      mensaje = "Es hora de descansar. Apaga y sigue mañana";
    } else if (totalMinutes <= 720) {
      mensaje = "Buenos días, desayuna fuerte y a darle al código";
    } else if (totalMinutes <= 840) {
      mensaje = "Echa un rato más pero no olvides comer";
    } else if (totalMinutes <= 960) {
      mensaje = "Espero que hayas comido";
    } else if (totalMinutes <= 1080) {
      mensaje = "Buenas tardes, el último empujón";
    } else if (totalMinutes <= 1320) {
      mensaje = "Esto ya son horas extras... piensa en parar pronto";
    } else {
      mensaje = "Buenas noches, es hora de pensar en parar y descansar";
    }

    messageEl.textContent = mensaje;
  }
}

setInterval(updateClock, 1000);
updateClock();

