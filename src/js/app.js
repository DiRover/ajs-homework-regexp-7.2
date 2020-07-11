/* eslint-disable no-useless-escape */
export default function getTelNumber(tel) { // экспортируем функцию
  if (/[a-zA-Z]/.test(tel)) {
    return 'Number is not valid'; // проверям на корректность номера
  }
  const repTel = tel.replace(/([\s\)\(\-)])/g, ''); // удаляем пробел, "-" и скобки из номера
  if (!(repTel.includes('+'))) { // проверяем был ли "+", если нет, то добавляем
    return `+${repTel.replace(/^\d/, '7')}`; // возвращаем номер телефона меняя первую цифру 7 на 8
  }
  return repTel; // возвращаем номер телефона, новая переменная, старая не меняется!!!
}
