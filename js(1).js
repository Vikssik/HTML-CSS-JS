currentQuestionIndex = 0;
var selectedDifficulty = "easy"; // за замовчуванням вибрано "легкий"
var questions = [
    {
        question: 'Який розмір медіа-запиту вказує на маленькі екрани, такі як мобільні телефони?',
        options: ['@media (max-width: 768px)', '@media (min-width: 1200px)', '@media (min-width: 992px)', '@media (min-width: 576px)'],
        correctAnswer: '@media (max-width: 768px)',
        maxScore: 2,
        type: 'radio',
        difficulty: ['easy', 'hard']
    },
    {
        question: 'Яка властивість в CSS Grid визначає розмір прогалин між елементами гріда?',
        options: ['grid-gap', 'grid-space', 'grid-margin', 'grid-padding'],
        correctAnswer: 'grid-gap',
        maxScore: 2,
        type: 'radio',
        difficulty: ['easy', 'medium','hard']
    },
    {
        question: 'Пара для адаптивної сітки з CSS Grid, що контролює розміщення елементів в одному рядку',
        options: ['grid-row', 'grid-template-columns: 1fr 1fr 1fr;', 'grid-template-rows: repeat(3, 1fr);', 'grid-auto-flow: column;'],
        correctAnswer: 'grid-template-columns: 1fr 1fr 1fr;',
        maxScore: 2,
        type: 'radio',
        difficulty: ['medium', 'hard']
    },    
    {
        question: 'Порядок яких елементів можна контролювати за допомогою CSS Grid?',
        options: ['Тільки блокових','Тільки інлайн-елементів','Блокових і інлайн-елементів','Тільки тексти'],
        correctAnswer: 'Блокових і інлайн-елементів',
        maxScore: 2,
        type: 'radio',
        difficulty: ['easy', 'medium']
    },
    {
        question: 'Які з наступних є властивостями CSS Grid для роботи з колонками?',
        options: ['grid-column', 'grid-row', 'grid-template-columns', 'grid-gap'],
        correctAnswers: ['grid-column', 'grid-template-columns'],
        maxScore: 2,
        type: 'checkbox',
        difficulty: ['easy', 'medium']
    },
    {
        question: 'Які з наступних методів використовуються для переключення відображення грід-елементів на різних розмірах екрану?',
        options: ['@media queries', 'grid-breakpoints', 'adaptive-grids', 'responsive-grid'],
        correctAnswers: ['@media queries'],
        maxScore: 2,
        type: 'radio',
        difficulty: ['easy', 'hard']
    },
    {
        question: 'Які з наступних властивостей використовуються для створення "багаторівневого" гріда в CSS?',
        options: ['grid-area', 'grid-row-start', 'grid-row-end', 'grid-column-start', 'grid-column-end'],
        correctAnswers: ['grid-row-start', 'grid-row-end', 'grid-column-start', 'grid-column-end'],
        maxScore: 2,
        type: 'checkbox',
        difficulty: ['medium']
    },
    {
        question: 'Як можна визначити, що елемент повинен займати простір від першої до третьої колонки в гріді?',
        options: ['grid-area: 1 / 3', 'grid-position: 1 3', 'grid-range: 1-3', 'grid-span: 1-3'],
        correctAnswers: ['grid-area: 1 / 3'],
        maxScore: 2,
        type: 'radio',
        difficulty: ['hard']
    },        
    {
        question: 'Яка властивість CSS вказує кількість колонок в грід-контейнері?',
        options: ['grid-count', 'grid-columns', 'grid-template-columns', 'grid-column-count'],
        correctAnswers: 'grid-template-columns',
        maxScore: 2,
        type: 'dropdown',
        difficulty: ['easy', 'medium']
    },
    {
        question: 'Порядок яких елементів можна контролювати за допомогою CSS Grid?',
        options: ['Тільки блокових', 'Тільки інлайн-елементів', 'Блокових і інлайн-елементів', 'Тільки тексти'],
        correctAnswers: ['Блокових і інлайн-елементів', 'Тільки інлайн-елементів'],
        maxScore: 2,
        type: 'checkbox',
        difficulty: ['easy','medium', 'hard']
    },
    {
        question: 'Для якої з задач CSS Grid є найкращим варіантом?',
        options: ['Розташування елементів у стрічці', 'Створення кросбраузерного макету', 'Реалізація анімації', 'Розмітка тексту'],
        correctAnswers: 'Створення кросбраузерного макету',
        maxScore: 2,
        type: 'dropdown',
        difficulty: ['easy', 'medium']
    },
    {
        question: 'В якому з цих випадків використання CSS Grid буде найбільш доцільним?',
        options: ['Проста вертикальна розмітка', 'Комплексний двовимірний макет', 'Реалізація анімації', 'Інлайн-елементи'],
        correctAnswers: 'Комплексний двовимірний макет',
        maxScore: 2,
        type: 'dropdown',
        difficulty: ['easy', 'medium']
    },
    {
        question: 'Які стилі можна використовувати для створення гріда з допомогою CSS?',
        options: ['Flexbox', 'Grid', 'Columns', 'Rows'],
        correctAnswers: ['Flexbox', 'Grid'],
        maxScore: 2,
        type: 'checkbox',
        difficulty: ['easy']
    },
    {
        question: 'Пара для адаптивної сітки з CSS Grid, що контролює розміщення елементів в одному рядку',
        options: ['grid-row', 'grid-template-columns: 1fr 1fr 1fr;', 'grid-template-rows: repeat(3, 1fr);', 'grid-auto-flow: column;'],
        correctAnswer: ['grid-template-columns: 1fr 1fr 1fr;', 'grid-auto-flow: column;'],
        maxScore: 4,
        type: 'dragdrop',
        difficulty: ['hard']
    },
    {
        question: 'Як можна створити адаптивну грід-сітку в CSS, яка автоматично розміщує елементи таким чином, щоб не було використано зайвого простору?',
        options: ['grid-auto-flow: dense;', 'grid-row: auto-fill;', 'grid-column: auto;', 'grid-template-areas: "header header header" "sidebar main main" "footer footer footer";'],
        correctAnswer: ['grid-auto-flow: dense;'],
        maxScore: 2,
        type: 'radio',
        difficulty: ['hard']
    },
    {
        question: 'Як можна створити адаптивний грід, де елементи автоматично змінюють своє розташування в залежності від доступного простору?',
        options: ['grid-template-columns: auto-fit;', 'grid-auto-columns: 1fr;', 'grid-flow: auto;', 'grid-auto-rows: minmax(100px, auto);'],
        correctAnswer: ['grid-template-columns: auto-fit;'],
        maxScore: 2,
        type: 'radio',
        difficulty: ['hard']
    }  
];
//Ініціалізація елементів,масивів  та створення подій
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Відміна стандартної дії відправки форми
    // Зберігаємо інформацію користувача в локальному сховищі
    // Змінюємо стилі елементів форми та відображаємо контейнер з тестом
    selectedDifficulty = document.getElementById('difficulty').value; // зберігаємо вибраний рівень складності
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var group = document.getElementById('group').value;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('group', group);
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('next-question').style.display = 'inline-block';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('student-info').innerHTML = `Ви ввели: ${firstName} ${lastName}, група: ${group}`;
    document.getElementById('drag-container').style.display = 'block';
    document.getElementById('drop-container').style.display = 'inline-block'; 
    displayQuiz();
});
var userResponses = [];  // Зберігає відповіді користувача для кожного питання
var userResponsesHistory = [];  // Зберігає історію відповідей користувача
var resultButton = document.getElementById('result-of-test');
resultButton.addEventListener('click', function() {
    alert(resultText);  // Показати результати через алерт
});

// Вибираємо всі перетягувані та приймаючі елементи
var draggables = document.querySelectorAll('.draggable');
var droppables = document.querySelectorAll('.droppable');
// Додаємо обробник події 'dragstart' для перетягуваних елементів
draggables.forEach(function(draggable) {
    draggable.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', draggable.getAttribute('data-value'));
    });
});

// Додаємо обробники подій 'dragover' та 'drop' для приймаючих елементів
droppables.forEach(function(droppable) {
    droppable.addEventListener('dragover', function(event) {
        event.preventDefault(); // Забороняємо браузеру виконувати дію за замовчуванням
    });

    droppable.addEventListener('drop', function(event) {
        event.preventDefault(); // Забороняємо браузеру виконувати дію за замовчуванням

        var draggedValue = document.getElementById('drop-container').children[0].textContent;
        var correctValue = droppable.getAttribute('data-correct');

        if (draggedValue === correctValue) {
            droppable.classList.add('correct'); 
            console.log('Correct!');
        } else {
            droppable.classList.add('incorrect'); 
            console.log('Incorrect!');
        }
    });
});

var userDragResponses = [];
var droppedCount = 0;  // Кількість елементів, які були перетягнуті до drop-container

//Функція відображення питання та варіантів відповідей на сторінці, а також обробка відповідей користувача
function displayQuiz() {
    document.getElementById('drag-container').style.display = 'none';
    document.getElementById('drop-container').style.display = 'none';
    var filteredQuestions = questions.filter(function(question) {
        return question.difficulty.includes(selectedDifficulty); //для кожної складності свої питання
    });
    if (currentQuestionIndex < questions.length) { //Перевірка індексу питання 
        var question = filteredQuestions[currentQuestionIndex]; //Отримується питання з масиву filteredQuestions за поточним індексом currentQuestionIndex.
        document.getElementById('question').innerHTML = question.question; //Текст питання відображається в елементі з ідентифікатором question.
        var optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = ''; //елемент, який містить варіанти відповідей, очищується.
        var previousButton = document.getElementById('next-question');
        if (previousButton) {
            previousButton.remove();
        }
        var selectedOptions = [];  // Локальна змінна для зберігання вибраних опцій
        if (question.type === 'radio' || question.type === 'checkbox') { // тип запитання одна правильна відповідь або декілька
            question.options.forEach(function(option) {
                var input = document.createElement('input');
                input.type = question.type;
                input.name = 'options';
                input.value = option;
                if (userResponses[currentQuestionIndex] && userResponses[currentQuestionIndex].includes(option)) {
                    input.checked = true;
                    selectedOptions.push(option);  // Додаємо вибрані опції до локальної змінної
                }
                var label = document.createElement('label');
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(label);
                optionsDiv.appendChild(document.createElement('br'));
            });
        } else if (question.type === 'dropdown') { //тип запитання список
            var dropdown = document.createElement('select');
            dropdown.id = 'dropdown-options';
            question.options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.text = option;
                dropdown.add(optionElement);
            });
            if (userResponses[currentQuestionIndex]) {
                dropdown.value = userResponses[currentQuestionIndex];
                selectedOptions.push(userResponses[currentQuestionIndex]);  // Додаємо вибрану опцію до локальної змінної
            }
            optionsDiv.appendChild(dropdown);
        } else if (question.type === 'dragdrop') { //тип запитання приймаючі та перетягувані
            document.getElementById('drag-container').style.display = 'block';
            document.getElementById('drop-container').style.display = 'block';
            var dragContainer = document.getElementById('drag-container');
            var dropContainer = document.getElementById('drop-container');
            dragContainer.innerHTML = '';
            dropContainer.innerHTML = '';
            var correctAnswers = question.correctAnswer;
            var correctAnswers = question.correctAnswer;
            question.options.forEach(function(option) {
                var draggable = document.createElement('div');
                draggable.className = 'draggable';
                draggable.setAttribute('data-value', option);
                draggable.draggable = true;
                draggable.textContent = option;
                draggable.addEventListener('dragstart', function(event) {
                    // Перевірка кількості вже перетягнутих елементів
                    var draggedElements = dropContainer.querySelectorAll('.dropped-answer');
                    if (draggedElements.length < 2) {
                        event.dataTransfer.setData('text/plain', option);
                    } else {
                        event.preventDefault(); // Заборона перетягування, якщо вже вибрано 2 елементи
                    }
                });
                dragContainer.appendChild(draggable);
            });            
            dropContainer.addEventListener('dragover', function(event) {
                event.preventDefault();
            });
            dropContainer.addEventListener('drop', function(event) {
                event.preventDefault();
                var draggedValue = event.dataTransfer.getData('text/plain');
                var newElement = document.createElement('div');
                newElement.textContent = draggedValue;
                // Перевірка, чи є відповідь правильною
                if (correctAnswers.includes(draggedValue)) {
                    newElement.className = 'correct-answer';
                } else {
                    newElement.className = 'incorrect-answer';
                }
                newElement.classList.add('dropped-answer'); // Додаємо клас для визначення вибраних відповідей
                dropContainer.appendChild(newElement);
            });
            // Відображення всіх відповідей (правильних та неправильних) в dropContainer
            question.options.forEach(function(option) {
                var droppable = document.createElement('div');
                droppable.className = 'droppable';
                droppable.setAttribute('data-correct', option);
                droppable.textContent = '?';
                dropContainer.appendChild(droppable);
            });
        }
        var nextButton = document.createElement('button'); //кнопка наступне запитання
        nextButton.id = 'next-question';
        nextButton.innerText = 'Наступне питання';
        nextButton.onclick = function () {
         saveUserResponses();
         currentQuestionIndex++;
         if (currentQuestionIndex < filteredQuestions.length) {
             displayQuiz();
             } else {
              nextButton.style.display = 'none'; // Ховаємо кнопку "Наступне питання"
              resultButton.style.display = 'inline-block'; // Показуємо кнопку "Результати тесту"
              calculateScore();
              displayResult();
           }
        }
        optionsDiv.appendChild(nextButton);
    } 
};

// Функція для зберігання відповідей користувача
function saveUserResponses() {
    var selectedOptions = [];
    userResponses[currentQuestionIndex] = selectedOptions;
    var radios = document.getElementsByName('options');
    radios.forEach(function(radio) {
        if (radio.checked) {
            selectedOptions.push(radio.value);
        }
    });
    if (document.getElementById('dropdown-options')) {
        selectedOptions.push(document.getElementById('dropdown-options').value);
    }
    if (questions[currentQuestionIndex].type === 'dragdrop') {
        var dropContainerChildren = document.getElementById('drop-container').children;
        for (var i = 0; i < dropContainerChildren.length; i++) {
            selectedOptions.push(dropContainerChildren[i].textContent);
        }
    }
    userResponses[currentQuestionIndex] = selectedOptions;
    userResponsesHistory.push({
        questionIndex: currentQuestionIndex,
        selectedOptions: selectedOptions
    });
};
var totalScore = 0;  // Змінна для зберігання загальної кількості балів
var resultText = ""; 

//Функція обрахунку балів
function calculateScore() {
    totalScore = 0;  // Скидаємо загальний рахунок
    resultText = "Результати:\n";  // Скидаємо попередні результати
    var score = 0;

    for (var i = 0; i < userResponses.length; i++) {
        for (var j = 0; j < questions.length; j++){
            var question = questions[j];
            var selectedOptions = userResponses[i];
    
            // Перевірка для одиночних відповідей (radio або dropdown)
            if (question.type === 'radio' || question.type === 'dropdown') {
                if (selectedOptions) {
                    selectedOptions.forEach(function(selectedOption) {
                        if (selectedOption === question.correctAnswer) {
                            score += 2;  // Нарахування 2 балів за кожну правильну відповідь
                            resultText += `Питання ${i + 1}: +2 бали за відповідь ${selectedOption}\n`;
                        } else {
                            resultText += `Питання ${i + 1}: 0 балів за відповідь ${selectedOption}\n`;
                        }
                    });
                }
            } 
            // Перевірка для багатовибіркових відповідей та перетягування
            else if (question.type === 'checkbox' || question.type === 'dragdrop') {
                try{
                    var allCorrect = true;
                    if (selectedOptions) {
                        selectedOptions.forEach(function(option) {
                            if (!question.correctAnswers.includes(option)) {
                                allCorrect = false;
                            }
                        });
                    } else {
                        allCorrect = false;
                    }
                
                    if (allCorrect && selectedOptions.length === question.correctAnswers.length) {
                        score = 2 * selectedOptions.length;  // Нарахування 2 балів за кожну правильну відповідь
                        resultText += `Питання ${i + 1}: +${score} бали за повну правильність\n`;
                    } else if (allCorrect) {
                        score = selectedOptions.length;  // Нарахування 1 бала за часткову правильність
                        resultText += `Питання ${i + 1}: +${score} бали за часткову правильність\n`;
                    } else {
                        resultText += `Питання ${i + 1}: 0 балів\n`;
                    }
                }
                catch {
                    console.log("err")
                }
            }
        }
        totalScore += score;
        score = 0;
    }
}

//Функція демонстрації результатів
function displayResult() {
    calculateScore();  // Calculate the score first
    
    resultText = `Тест завершено. Ваша кількість балів: ${totalScore}/20.`;
    
    if (totalScore === 20) {
        resultText += ' Вітаємо, ви пройшли тест!';
    } else {
        resultText += ' Спробуйте ще раз.';
    }

    // Додамо історію відповідей до resultText
    resultText += '\n\nІсторія ваших відповідей:\n';
    userResponsesHistory.forEach(function(historyItem) {
        resultText += `Питання ${historyItem.questionIndex + 1}: ${historyItem.selectedOptions.join(', ')}\n`;
    });

    // Показуємо результати в модальному вікні
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];
    document.getElementById('modal-content-text').innerText = resultText;
    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}





