// Получаем кнопки ввода и сброса
const btn = document.querySelector('#calc_btn');
const btnRes = document.querySelector('#calc_reset');

// Создаем тег и добавляем в него текст с ошибкой
const p = document.createElement('p');
p.textContent = 'Ошибка ввода! Введите положительные числа.';
p.classList.add('error');

// Функционал
btn.addEventListener('click', (event) => {
    const numb1 = document.querySelector('#number-1');
    const numb2 = document.querySelector('#number-2');
    const resultField = document.querySelector('#result');
    const label = document.querySelector('.form_label')

    
   
    // Преобразуем значения в числа
    const value1 = parseInt(numb1.value);
    const value2 = parseInt(numb2.value);


    // Проверяем на валидность
    if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 < 0) {
        // Если ошибка, выводим сообщение об ошибке
        label.parentNode.appendChild(p);
        resultField.value = '';
    } else {       
        // Выполняем расчет, если все корректно
        function countNubers(n1, n2) {
            const operation = n1 * n2 / 100;
            const result = n1 - operation;
            return result;
        }

        const formResult = countNubers(value1, value2);
        resultField.value = formResult;
    }


});

// Сброс значений
btnRes.addEventListener('click', (event) => {
    document.querySelector('#number-1').value = '';
    document.querySelector('#number-2').value = '';
    document.querySelector('#result').value = '';

    // Удаляем сообщение об ошибке, если оно есть

    // Проверяем , является ли тег <p> частю узла отца-родителя parentNode , 
    // если да , то при нажатии на кнопку мы его стираем 
    if (document.querySelector('.form_label').parentNode.contains(p)) {
        document.querySelector('.form_label').parentNode.removeChild(p);
    }
});