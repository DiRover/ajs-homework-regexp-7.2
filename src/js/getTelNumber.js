/* eslint-disable no-useless-escape */
export default function getTelNumber(tel) { // экспортируем функцию
  const repTel = tel.replace(/([\s\)\(\-)])/g, ''); // удаляем пробел, "-" и скобки из номера
  if (!(repTel.includes('+'))) { // проверяем был ли "+", если нет, то добавляем
    if (/\D/.test(repTel)) {
      return 'Number is not valid'; // проверям на корректность номера (содержит что-то кроме цифр)
    }
    return `+${repTel.replace(/^\d/, '7')}`; // возвращаем номер телефона меняя первую цифру 7 на 8
  }
  if (!(repTel.match(/^\+\d+$/))) {
    return 'Number is not valid'; // проверям на корректность номера (+.....)
  }
  return repTel; // возвращаем номер телефона, новая переменная, старая не меняется!!!
}
