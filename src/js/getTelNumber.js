/* eslint-disable no-useless-escape */
export default function getTelNumber(tel) { // экспортируем функцию
  const repTel = tel.replace(/(\D)/g, ''); // удаляем всё кроме цифр
  return `+${repTel.replace(/^\d/, '7')}`;
}

// let tel = '+86 00Ё0 000 0000'
// getTelNumber(tel)

/* if (!(repTel.includes('+'))) { // проверяем был ли "+", если нет, то добавляем
    if (/\D/.test(repTel)) {
      return 'Number is not valid'; // проверям на корректность номера (содержит что-то кроме цифр)
    }
    return `+${repTel.replace(/^\d/, '7')}`; // возвращаем номер телефона меняя первую цифру 7 на 8
  }
  if (!(repTel.match(/^\+\d+$/))) {
    return 'Number is not valid'; // проверям на корректность номера (+.....)
  }
  return repTel; // возвращаем номер телефона, новая переменная, старая не меняется!!! */
