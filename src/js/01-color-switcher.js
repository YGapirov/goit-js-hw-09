function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
    
  const startColorBtn = document.querySelector('button[data-start]');
  const stopColorBtn = document.querySelector('button[data-stop]');
  let timerId = null; //
  
  startColorBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
      startColorBtn.disabled = true; // блокуєм повторне натискання батона
  });
    
  stopColorBtn.addEventListener("click", () => {
      clearInterval(timerId);    
          startColorBtn.disabled = false; //розблоковуємо доступ до батона після стопа
  
  });