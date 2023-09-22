import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  let delay = Number(form.delay.value); // отримуємо ЧИСЛОВЕ значення делай введене користувачем
 
  if (form.step.value < 0 || form.delay.value < 0 || form.amount.value <= 0) {
    Notiflix.Notify.warning(`❗Please enter a value > 0`, { position: 'center-top', distance: '200px'});
  } else {

    for (let i = 1; i <= Number(form.amount.value); i += 1) {    //робимо ітерацію по створеним промісам введених в рядок емаунт(визначаємо кількість введених емаунтів)
      createPromise(i, delay)  //позиція, затримка
        .then(({ position, delay }) => {   //успішне виконання промісу 
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {   // виконую і повертаю помилку промісу
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delay += Number(form.step.value);  // кожна ітерація циклу значення delay збільшується+= на значення кроку яке юхер увів в поле степ
    }
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       resolve ({ position, delay })// Fulfill
     } else {
       reject ({ position, delay })// Reject
     } 
    
    }, delay)
  });
  };










